const express = require('express')
const router = express.Router()

const db = require('../data/db')



const data = {
    title : "Popüler Kurslar",
    categories : ["Web Geliştirme","Programlama","Mobil Uygulamalar","Veri Analizi","Ofis Uygulamaları"],
    blogs : [
        {
            blogid : 1,
            baslik : "Komple Web Geliştirme",
            aciklama : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quae sed debitis praesentium molestiae, laboriosam iste aliquid quam repellat dolore reiciendis necessitatibus corporis repellendus iusto soluta in amet natus? Reiciendis?",
            resim : "1.jpeg",

        },
        {
            blogid : 2,
            baslik : "Python Programlama",
            aciklama : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quae sed debitis praesentium molestiae, laboriosam iste aliquid quam repellat dolore reiciendis necessitatibus corporis repellendus iusto soluta in amet natus? Reiciendis?",
            resim : "2.jpeg",
        },
        {
            blogid : 3,
            baslik : "Veri Analizi Eğitimi",
            aciklama : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quae sed debitis praesentium molestiae, laboriosam iste aliquid quam repellat dolore reiciendis necessitatibus corporis repellendus iusto soluta in amet natus? Reiciendis?",
            resim : "3.jpeg",
        }
    ]
}

router.use("/blogs/:id",(request,response) => {

    response.render('users/blog-details')

})

router.use("/blogs",(request,response) => {
    
    response.render('users/blogs',data)

})


// Use metodu ile gelen istekleri ve cevapları ele alabiliyoruz!
router.use("/",(request,response) => {
    db.execute("select * from blog")
    .then(result => {
        response.render('users/index',{
            title : "Popüler Kurslar",
            blogs: result[0],
            categories : data.categories
        })
    })
    .catch(err => console.log(err))
})

module.exports = router