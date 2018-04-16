
var request = require('request');
var fs = require('fs');
console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log(response.statusMessage)
         console.log(response.headers['content-type'])
       })
       .on('end', function(end) {
        console.log('Download complete.');
        })
       .pipe(fs.createWriteStream('./future.jpg'));


