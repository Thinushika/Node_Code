const fs = require('fs');

const readStreamFile = fs.createReadStream('./docs/blog3.txt');
const writeStreamFile = fs.createWriteStream('./docs/blogNewpipe.txt');
readStreamFile.pipe(writeStreamFile);
