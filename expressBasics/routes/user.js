


const express = require('express')

const router = express.Router()


router.use("/blogs/:id",(request,response) => {

    response.render('users/blog-details')

})

router.use("/blogs",(request,response) => {
    
    response.render('users/blogs')

})


// Use metodu ile gelen istekleri ve cevapları ele alabiliyoruz!
router.use("/",(request,response) => {
    response.render('users/index')
})

module.exports = router