

const http = require('http')
const routeHandler = require('./allroutes')


let server = http.createServer(routeHandler)

server.listen(3000)

console.log("Server has been started at 3000")