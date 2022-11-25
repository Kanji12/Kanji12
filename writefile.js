var fs = require('fs');
var Filename = 'friends.txt';
var FileContent = "Kanji ,Jatin,Sanjay,nevil";
fs.writeFile(Filename, FileContent, function (error) {
    if (error) {
        console.log(console.error);
    }
    else
        console.log('file has been saved sucessfuly...');
});