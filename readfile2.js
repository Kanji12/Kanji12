var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log("request accept..");
    var FileName = 'home.html';
    var FileContent = fs.readFileSync(FileName);
    response.writeHead(200, { "content-type": "text/html" });
    response.write(FileContent);
    response.end();
});
server.listen(5000);
console.log("server is ready to accept to request..");

