var http = require('http')
var server = http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{"content-type":"application/json"});
    if(request.url=="/info")
    {
        //let us create object
        var person1 = {
            name : "Ankit Patel",
            age: 37,
            weight: 75.25,
            gender: true,
            email : 'ankit@gmail.com'
        };

        var person2 = {
            name : "Nikunj bhatt",
            age: 40,
            weight: 70.25,
            city: 'gandhinagar',
            email : 'nikunj@gmail.com'
        };
        var output = [person1,person2]; //array of object
        response.write(JSON.stringify(output));
    }
    response.end();
});
server.listen(5000);
console.log('ready to accept request')