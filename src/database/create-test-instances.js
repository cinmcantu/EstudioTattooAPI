const Portfolio = require('../models/Portfolio')

const portfolios = [
    {
        "artist_id" : 1,
        "description" : "Chinese dragon",
        "size" : "big",
        "tag" : "Oriental",
        "color" : "colored",
        "avaliable": false
    },
    {
        "artist_id" : 2,
        "description" : "Pokemon",
        "size" : "medium",
        "tag" : "Geek",
        "color" : "colored",
        "avaliable": true
    },
    {
        "artist_id" : 2,
        "description" : "Bart from The Simpsons",
        "size" : "small",
        "tag" : "Cartoon",
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