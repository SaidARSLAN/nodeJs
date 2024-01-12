const express = require('express')

const router = express.Router()


router.use("/blog/create",(request,response) => {
    
    response.render('admin/blog-create')

})

router.use("/blog/:blogid",(request,response) => {
    
    response.render('admin/blog-edit')

})
router.use("/blogs",(request,response) => {
    
    response.render('admin/blog-list')

})

module.exports = router;