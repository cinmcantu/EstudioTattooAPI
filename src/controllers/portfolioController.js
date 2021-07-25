const { update } = require('../models/Portfolio')
const Portfolio = require('../models/Portfolio')

module.exports = (app) =>{
    
    app.get('/portfolio', async (req, res)=>{
        try{
            const portfolio = await Portfolio.findAll()
            if(portfolio.length === 0){
                throw new Error("The database is empty")
            }
            res.json({
                "result": portfolio,
                "count" : portfolio.length
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }
    })
    app.get('/portfolio/:id', async (req, res)=>{
        const requestId = req.params.id
        try{
            const portfolio = await Portfolio.findOne({where:{id: requestId}})
            if(!portfolio){
                throw new Error("There is no portfolio with this id")
            }
            res.json({
                "result": portfolio,
                "count" : portfolio.length
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }
    })
    app.get('/portfolio/tag/:tag', async (req, res)=>{
        const requestTag = req.params.tag.toLowerCase()
        try{
            const portfolio = await Portfolio.findOne({where:{tag: requestTag}})
            if(!portfolio){
                throw new Error(`There is no portfolio with the tag ${req.params.tag}`)
            }
            res.json({
                "result": portfolio,
                "count" : portfolio.length
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }
    })

    app.post('/portfolio', async (req, res)=>{
        try{
            await Portfolio.create(req.body)
            res.json({
                "message" : `The portfolio ${req.body.description} has been inserted`,
                "error" : false
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }
        
    })

    app.delete('/portfolio/:id', async (req, res)=>{
        const requestId = req.params.id
        try{
            await Portfolio.destroy({where:{id: requestId}})
            res.json({
                "message" : `The row with id ${requestId} has been deleted`,
                "error" : false
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }      
    })

    app.put('/portfolio/:id', async (req, res)=>{
        const requestId = req.params.id
        const newParams = req.body
        const attributes = ["artist_id", "description", "size", "tag", "color", "avaliable"]
          
        try{
            for(attr in newParams){
                if(attributes.indexOf(attr) < 0)
                    throw new Error(`The attribute ${attr} is not valid. Use one of the these: artist_id, description, size, tag, color and avaliable`)
            }
            let portfolio = await Portfolio.findOne({where:{id: requestId}})
            portfolio.update({
                "artist_id" : newParams.artist_id ? newParams.artist_id : portfolio.artist_id,
                "description" : newParams.description ? newParams.description : portfolio.description,
                "size" : newParams.size ? newParams.size : portfolio.size,
                "tag" : newParams.tag ? newParams.tag.toLowerCase() : portfolio.tag,
                "color" : newParams.color ? newParams.color : portfolio.color,
                "avaliable" : newParams.avaliable === true || newParams.avaliable === false ? newParams.avaliable : portfolio.avaliable,
            })
            await portfolio.save()
            res.json({
                "message" : `The row with id ${requestId} has been updated`,
                "result" : portfolio,
                "error" : false
            })
        }catch(e){
            res.json({
                "message" : `ERROR: ${e.message}`,
                "error" : true
            })
        }      
    })

}