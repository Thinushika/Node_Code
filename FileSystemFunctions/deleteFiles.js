const fs = require('fs');

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File is deleted');
    })
} else {
    fs.writeFile('./docs/deleteme.txt', 'hello again', () => {
        console.log('file was created');
    })
}