module.exports = async function(db, {proffyValue, classValue, classScheduleValue}) {
    // insert data into the proffys table
    const insertedProffy = await db.run(`
         INSERT INTO proffys (
             nome,
             avatar,
             whatsapp,
             bio
         ) VALUES (
             ${proffyValue.name},
             ${proffyValue.avatar},
             ${proffyValue.whatsapp},
             ${proffyValue.bio}
         );
    `)

    const proffy_id = insertedProffy.lastId
}