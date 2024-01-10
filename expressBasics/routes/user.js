


const express = require('express')
const path = require('path')

const router = express.Router()


router.use("/blogs/:id",(request,response) => {

    response.sendFile(path.join(__dirname,'../views/users','blog-details.html'))

})

router.use("/blogs",(request,response) => {
    
    response.sendFile(path.join(__dirname,'../views/users','blogs.html'))

})


// Use metodu ile gelen istekleri ve cevapları ele alabiliyoruz!
router.use("/",(request,response) => {
    response.sendFile(path.join(__dirname,'../views/users','index.html'))
})

module.exports = router