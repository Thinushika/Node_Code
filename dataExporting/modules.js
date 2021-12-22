const xyz = require('./people'); // importing people file into module
require('./people');

console.log(xyz);
console.log(xyz.people, xyz.ages);

//---------------
const {people, ages} = require('./people');
console.log(people, ages);

//----------------
const os = require('os');
//console.log(os);
// find out information about the os
console.log(os.platform(), os.homedir());

