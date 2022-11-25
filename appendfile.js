var fs = require('fs');
var Filename = 'friends.txt';
var FileContent = " \n kanji , Ankitsir ,Jatin.Abhishek";
fs.appendFile(Filename, FileContent, function (error) {
    if (error) {
        console.log(error);

    }
    else
        console.log("file has been loaded...")
})