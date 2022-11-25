var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var Url = request.url;
    fs.readFile('home.html',function (error,FileContent)
    {
        response.writeHead(200, { 'conent-type': 'text/html' });
        if (Url ='/home') {
            response.write(FileContent)
        }
        response.end()
    });
  
});
server.listen(9000);
console.log('All set..')