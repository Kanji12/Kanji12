var http = require('http');

var server = http.createServer(function (request, responce) {
    var CurrentURL = request.url;
    console.log(CurrentURL);
    responce.writeHead(200, { 'content-type': 'text/html' }); 
    if (CurrentURL == "/") {
        responce.writeHead("<html><head></head><body><h1>Home</h1></body></html>")
    }
    else if (CurrentURL == "/contactus") {
        responce.writeHead("<html><head></head><body><h1>Contactus</h1></body></html>")
    }
    else if (CurrentURL == "/aboutus") {
        responce.writeHead("<html><head></head><body><h1>aboutus</h1></body></html>")
    }
    else if (CurrentURL == "/product") {
        responce.writeHead("<html><head></head><body><h1>Ptoduct</h1></body></html>")
    }
    responce.end();
});
server.listen(5000)
console.log("server is ready....");