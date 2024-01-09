let fs = require('fs')



const routeHandler = (request,response) => {


if ( request.url=='/create' && request.method == "POST") {

    const data = []
        // Buffer (her bilgi parçacığı bana geldiğinde bir buffer oluşturulur!)
    request.on('data', (chunk) => {
        // Kaç data geleceğini bilmeyiz ancak hepsini dizide toplarız
        data.push(chunk)
    })

    request.on('end',() => {
        const result = Buffer.concat(data).toString()
        const parsedData = result.split("=")[1]
        fs.appendFile("blogs.txt",parsedData, err => {

            if (err) {
                console.log(err)
            }
            else {
                response.statusCode == 302; // Yönlendirme metodu!
                response.setHeader("Location","/")
                response.end()
            }
        })
    })

    
}
else if ( request.url=='/create') {

    

    fs.readFile('./htmls/create.html', (error, html) => {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(html)
        response.end()
    })
}
}

module.exports = routeHandler;