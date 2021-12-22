const fs = require('fs');
fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log('file was written');
})

fs.writeFile('./docs/blog2.txt', 'hello again', () => {
    console.log('file was written');
})