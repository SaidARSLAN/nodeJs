let http = require('http')


// Server oluşturup bir callback fonksiyon çağırdık!
let  server = http.createServer((request,response) => {
    // console.log(request.url,request.method)
    // console.log(response.statusCode)

    // Response başlığa sahiptir.
    // Gönderilmiş olan bilgiler responsun body'si içerisinde gider.
    // Ekstra bilgiler Content-Type gibi gönderilir!
    response.setHeader("Content-Type","text/html")
    response.statusCode = 200
    response.statusMessage = "OK"
    response.write("<h1>AnaSayfa</h1>")
    response.write("<p>Urunler</p>")

    response.end()

})


server.listen(3000)

console.log("Node.js server at port 3000")