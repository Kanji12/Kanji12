var http = require('http');
var url = require('url');
var fs = require('fs')
var server = http.createServer(function (request, response) {
    var q = url.parse(request.url, true);
    console.log("Query String" + q.pathname);
    var data = q.query
    console.log(data);

    var filename = "/mengo" + q.pathname;
    console.log('filename' + q.pathname);
    fs.readFile(filename,function(error,data){
        if (error) {
            //file not found
            response.writeHead(400,{'content-type':'text/html'})
        }
        else {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write(data);
            response.end();
        }
    })
});
server.listen(9000);
console.log("server is ready to accept request....");