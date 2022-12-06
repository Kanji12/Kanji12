var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
    //http://127.0.0.1:9000/product?name=Realme&Price=99999
    var q = url.parse(request.url, true)
    console.log(q)
    var data = q.query;
    console.log(data);
    console.log("product name :" + data.name);
    console.log("product Price :" + data.Price);
    console.log("path name :" + q.pathname);
    console.log("product Href :" + q.href);
});
server.listen(9000)
console.log("server ready to accepet request")