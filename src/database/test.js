const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    // insert data

    proffyValue = {
        name: 'Enoque Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/26550708?s=460&u=3ce11e5b40dfafc2ddcde2b539360b263acc862e&v=4',
        whatsapp: '(83) 98654-0869',
        bio: 'Entusiasta das melhores tecnologias de química avançada.'
    }

    classValue = {
        subject: "Química",
        cost: "20"

    }

    classScheduleValue = [
        // class_id will come through the database, after registering the class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // createProffy(db {proffyValue, classValue, classScheduleValue, })

    // query entered data
})