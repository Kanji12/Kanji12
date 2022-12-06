var fs = require('fs')
fs.unlink('apple.txt', function (error)
{
    if (error) {
        console.log(error.message)
    }
    else
        console.log("file has been deleted succcessfully...")
    
})