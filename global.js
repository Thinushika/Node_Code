// global object
//console.log(global);
// global.setTimeout(() => {
//     console.log("in the timeout")
// }, 3000);
global.setTimeout(() => {
    console.log("in the timeout"); //print this after 3 sec
    clearInterval(int); // stop time interval
}, 3000);

const int = setInterval(() => {
    console.log("in the intervel"); //print this at every 1 sec
}, 1000)

console.log(__dirname); //absalute path of current folder
console.log(__filename); //absalute path of current file
