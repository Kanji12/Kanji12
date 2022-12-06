var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function (request, response) {
  console.log("Request received .....");
  var q = url.parse(request.url, true);
  console.log("Query String " + q.pathname);

  var filename = "./" + q.pathname;
  console.log("filename " + q.pathname);

  fs.readFile(filename, function (error, data) {
    if (error) {
      //file not found
      response.writeHead(404, { "content-type": "text/html" });
      response.end("404 page not found");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.write(data);
      response.end();
    }
  });
});
server.listen(5000);
console.log("server is started......");
