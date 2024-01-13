const express = require("express");
const router = express.Router();

const db = require('../data/db')



router.use("/blogs/create", async function(req, res) {
    try {

        // Birincisi sorgudan dönecekler bilgiler, ikincisi kolon bilgileri
        const [categories, ] = await db.execute("select * from category");

        res.render("admin/blog-create", {
            title : "add blog",
            categories : categories
        });
    }
    catch (err) {
        console.log(err)
    }
    
});

router.use("/blogs/:blogid", function(req, res) {
    res.render("admin/blog-edit");
});

router.use("/blogs", function(req, res) {
    res.render("admin/blog-list");
});

module.exports = router;