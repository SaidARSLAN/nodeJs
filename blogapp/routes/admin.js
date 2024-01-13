const express = require("express");
const router = express.Router();

const db = require('../data/db')



router.get("/blogs/create", async function(req, res) {

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
router.post("/blogs/create", async (req,res) => {
    const baslik = req.body.title
    const aciklama = req.body.description
    const resim = req.body.resim
    const kategori = req.body.category === '' ? 0 : req.body.category
    const anasayfa = req.body.mainpage == 'on' ? 1 : 0;
    const onay = req.body.aprove == "on" ? 1 : 0;
    console.log(baslik,aciklama,resim,kategori,anasayfa,onay)
    console.log(req.body) // Formun içerisinden girilen data bilgilerini verir!

    try {
        await db.execute("INSERT INTO blog(baslik,aciklama,resim,categoryid,anasayfa,onay) VALUES (?,?,?,?,?,?)",
            [baslik,aciklama,resim,kategori,anasayfa,onay]
        )
        res.redirect("/")
    }
    catch (err) {
        console.log(err)
    }

})
router.get("/blogs/:blogid", function(req, res) {
    res.render("admin/blog-edit");
});

router.get("/blogs", function(req, res) {
    res.render("admin/blog-list");
});

module.exports = router;