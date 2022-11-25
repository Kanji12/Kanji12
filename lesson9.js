var http = require("http");
var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, { "content-type": "application/json" });
  if (request.url == "/info") {
    //let us create object
    var team1 = {
      name: "Banglor",
      city: "Banglor",
      captain: "Kohali",
    };

  
    var output = [team1]; //array of object
    response.write(JSON.stringify(output));
  }
  response.end();
});
server.listen(5000);
console.log("ready to accept request");
