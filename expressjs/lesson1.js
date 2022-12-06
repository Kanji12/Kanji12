var express = require('express');
var app = express();

app.get("/", function (request, response) {
    response.end("this is my home page ...");
});
app.get("/aboutus", function (request, response) {
    response.end("this is aboutus page...");
})
app.get("/product", function (request, response) {
    response.end("this is product page..");
})
app.get("*", function (request, response) {
    response.end("page not found..");
})
app.listen(5000);
console.log("ready  to accept request...")