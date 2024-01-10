const express = require('express')
const path = require('path')

const router = express.Router()


router.use("/blog/create",(request,response) => {
    
    response.sendFile(path.join(__dirname,'../views/admin','blog-create.html'))

})

router.use("/blog/:blogid",(request,response) => {
    
    response.sendFile(path.join(__dirname,'../views/admin','blog-edit.html'))

})
router.use("/blogs",(request,response) => {
    
    response.sendFile(path.join(__dirname,'../views/admin','blog-list.html'))

})

module.exports = router;