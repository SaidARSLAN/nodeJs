
const mysql = require('mysql2')
const config = require('../config') 

let connection = mysql.createConnection(config.db)

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }

    connection.query("select * from blog", (err,result) => {
        console.log(result[0].baslik)
        console.log(result[1].baslik)
    })

    console.log("Mysql server has been connected!")
})

module.exports = connection.promise()