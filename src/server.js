// dice
const proffys = [
    { name: "Enoque Fernandes",
    avatar: "https://avatars0.githubusercontent.com/u/26550708?s=460&u=3ce11e5b40dfafc2ddcde2b539360b263acc862e&v=4", 
    whatsapp: "(83) 98654-0869", 
    bio: "Entusiasta das melhores tecnologias de química avançada.", 
    subject: "Química", 
    cost: "R$ 20,00", 
    weekday: [0], 
    time_from: [700], 
    time_to: [1220] }
]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [

    "Domingo",
    "Segunda feira",
    "Terça feira",
    "Quarta feira",
    "Quinta feira",
    "Sexta feira",
    "Sábado",

]

// functionalities
function pageLanding(req, res) {
    return res.render("index.html")
    
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays  })

}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")

} 

// server
const express = require('express')
const server = express()


//set up nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// server start and configuration
server
// configuring static files (css, scripts, images)
.use(express.static("public"))
// application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start server
.listen(5500)

