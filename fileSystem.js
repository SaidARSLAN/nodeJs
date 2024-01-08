let http = require('http')
let fs = require('fs')

let server = http.createServer((request,response) => {
    if (request.url == '/') {
        fs.readFile("./htmls/index.html",(error, html) =>  {

            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(html)
            response.end()

        })
    }
    else if (request.url == '/blogs') {
        fs.readFile("./htmls/blogs.html",(error, html) =>  {

            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(html)
            response.end()
        
        })

    }
    else {
        fs.readFile("./htmls/not-found.html",(error, html) =>  {

            response.writeHead(404, {"Content-Type": "text/html"})
            response.write(html)
            response.end()
            
        })
    }
})


server.listen(3000)

console.log("Server has been started at 3000")