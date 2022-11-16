
var http = require("http");
var server = http.createServer(function (request, responce) {
    console.log("we have received your request....")
});
console.log("server is ready to accept request...")
server.listen(5000);
