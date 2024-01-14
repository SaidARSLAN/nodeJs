const express = require("express");
const router = express.Router();

const db = require('../data/db')



router.get("/blogs/delete/:blogid", async (req,res) => {

    const blogid = req.params.blogid;

    try {
        const [blogs,] = await db.execute("select * from blog where blogid=?",[blogid])
        const blog = blogs[0];

        res.render("admin/blog-delete", {
            title : "delete blog",
            blog : blog,
        })
    }
    catch (err) {
        console.log(err)
    }

})

router.post("/blog/delete/:blogid", async (req,res) => {

    const blogid = req.body.blogid
    try {
        await db.execute("delete from blog where blogid=?",[blogid])
        res.redirect("/admin/blogs")
    }
    catch (err) {
        console.log(err)
    }
})

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
        res.redirect("/admin/blogs")
    }
    catch (err) {
        console.log(err)
    }

})

router.post("/blogs/:blogid", async (req,res) => {

    const blogid = req.body.blogid;
    const baslik = req.body.title;
    const aciklama = req.body.description;
    const resim = req.body.resim;
    const anasayfa = req.params.mainpage == "on" ? 1 : 0;
    const onay = req.body.aprove == "on" ? 1 : 0;
    const kategori = req.body.category === '' ? 0 : req.body.category
    console.log(blogid,baslik,aciklama,resim,anasayfa,onay,kategori)
    try {
        await db.execute("UPDATE blog SET baslik=?, aciklama=?, resim=?, anasayfa=?,onay=?, categoryid=? WHERE blogid=?",
            [baslik,aciklama,resim,anasayfa,onay,kategori,blogid]
            )
            res.redirect("/admin/blogs")
    }
    catch (error) {
        console.log(error)
    }
})




router.get("/blogs/:blogid", async function(req, res) {
    const blogid = req.params.blogid;

    try {
        const [blogs, ] = await db.execute("select * from blog where blogid = ?",[blogid])
        const [categories, ] = await db.execute("select * from category")
        const blog = blogs[0];
        if (blog) {
            return res.render("admin/blog-edit",{
                title : blog.baslik,
                blog : blog,
                categories : categories
            });
        }

        res.redirect("admin/blogs")

    }
    catch (error) {
        console.log(error)
    }

});

router.get("/blogs", async function(req, res) {
    try {
        const [blogs,] = await db.execute("select blogid,baslik,resim from blog");
        res.render("admin/blog-list",{
            title : "blog list",
            blogs: blogs
        })
    }

    catch (err) {
        console.log(err)
    }
});

module.exports = router;