let http = require('http')

const requestListener = (request,response) => {
    response.end()
}


let  server = http.createServer(requestListener)


server.listen(3000)

console.log("Node.js server at port 3000")