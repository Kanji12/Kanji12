var fs = require('fs');

function ReadDataFromStream()
{
    var file = fs.createReadStream('friends.txt', 'utf-8');
    file.on('error', (error) => console.log(error.message));
    file.on('data', (chunk) => console.log(chunk));
    file.on('end', () => console.log("end file"));


}
ReadDataFromStream();
console.log('File read  sucessfully...')