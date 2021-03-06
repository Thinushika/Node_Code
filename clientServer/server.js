const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//method for creating server
// const server = http.createServer((req, res) => {
//     console.log(req);
// });


//request obj
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const num = _.random(0,20);
    console.log(num);

    //run function only once
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();


    //routing 
    let path = './clientServer/views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            //redirect
        case '/about.m':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //set header content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('hello, thinu');
    // res.end();

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // if everything is okay status code is 200
            // res.statusCode = 200;
            res.end(data);
        }
    })
});

// listen to port and host name
server.listen(3000, 'localhost', () => {
    console.log('listning for request on port 3000');
})

