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
    const data = req.query
    
    // if you have data
    const isNotEmpty = Object.keys(data).length > 0  /* turning the keys of the object into arreys */
    if (isNotEmpty) {
        // add data to the proffys list
        proffys.push(data)

        return res.redirect("/study")
    }

    // if not, do not page
    return res.render("give-classes.html", {subjects, weekdays})

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

