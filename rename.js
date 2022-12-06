var fs = require('fs')
CurrentFilename = "banana.txt";
NewFilename = "mango.txt";
fs.rename(CurrentFilename, NewFilename, function (error) {
    if (error) {
        console.log(error.message)
    }
    else
        console.log("File has been rename successfully");
});