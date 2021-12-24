const fs = require('fs');

const readStreamFile = fs.createReadStream('./docs/blog3.txt');
const writeStreamFile = fs.createWriteStream('./docs/blogNew.txt');

readStreamFile.on('data', (chunk) => {
    console.log('..........new chunk...........')
    // console.log(chunk);
    console.log(chunk.toString());

    writeStreamFile.write('\n------------NEW CHUNK---------------\n');
    writeStreamFile.write(chunk);
});

