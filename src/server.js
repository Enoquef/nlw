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

function pageLanding(req, res) {
    return res.render("index.html")
    
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })

}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")

} 


const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//set up nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
// configuring static files (css, scripts, images)
.use(express.static("public"))
// application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

