const Portfolio = require('../models/Portfolio')

const portfolios = [
    {
        "artist_id" : 1,
        "description" : "Chinese dragon",
        "size" : "big",
        "tag" : "oriental",
        "color" : "colored",
        "avaliable": false
    },
    {
        "artist_id" : 2,
        "description" : "Pokemon",
        "size" : "medium",
        "tag" : "geek",
        "color" : "colored",
        "avaliable": true
    },
    {
        "artist_id" : 2,
        "description" : "Bart from The Simpsons",
        "size" : "small",
        "tag" : "cartoon",
        "color" : "colored",
        "avaliable": true
    },
    {
        "artist_id" : 3,
        "description" : "Wolf beneath the moon",
        "size" : "big",
        "tag" : "sketch",
        "color" : "black and white",
        "avaliable": false
    }
]

portfolios.forEach(async (elem)=>{
    const port = await Portfolio.create(elem)
})