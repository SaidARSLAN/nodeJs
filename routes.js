let http = require('http')


let server = http.createServer((request,response) => {
    
    if (request.url == '/') {
        response.writeHead(200, {"Content-Type":"text/html"})
        response.write(`
                        
                    <html>
                            <head>
                                <title>Ana Sayfa</title>
                            </head>
                            <body>
                                <h1>Anasayfa</h1>
                            </body>
                    </html>
        
        `)
        response.end()
    }
    else if (request.url == '/blogs') {
        response.write(`
                        
                    <html>
                            <head>
                                <title>Blogs</title>
                            </head>
                            <body>
                                <h1>Blog Listesi</h1>
                            </body>
                    </html>
        
        `)
        response.end()
    }
    else {
        response.write(`
                        
                    <html>
                            <head>
                                <title>Not Found</title>
                            </head>
                            <body>
                                <h1>404 - Not Found</h1>
                            </body>
                    </html>
        
        `)
        response.end()
    }

})


server.listen(3000)

console.log("Node.js server at port 3000")