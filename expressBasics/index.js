// Kural 1 => En özel route en yukarıda olması gerekir!

const express = require('express')

// Pathleri birleştirmek için!

// Express bizim için bir uygulama oluşturacak!
const app = express()

app.set("view engine","ejs")

const mysql = require('mysql2')
const config = require('./config')

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


const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
// Statik dosyalar için
app.use("/libs",express.static('node_modules'))
app.use("/static",express.static('public'))

app.use("/admin",adminRoutes)
app.use(userRoutes);


// Uygulamayı ilgili porttan dinlemeye aldık!
app.listen(3000,() => {
    console.log("Listening on port 3000")
})