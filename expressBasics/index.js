// Kural 1 => En özel route en yukarıda olması gerekir!

const express = require('express')

// Pathleri birleştirmek için!

// Express bizim için bir uygulama oluşturacak!
const app = express()

app.set("view engine","ejs")



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