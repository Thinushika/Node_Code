//fs is the inbuilt module for file system 
const fs = require('fs');

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })
// console.log('last line')


// writing files
// fs.writeFile('./docs/blog.txt', 'hello world', () => {
//     console.log('file was written');
// })
// fs.writeFile('./docs/blog2.txt', 'hello again', () => {
//     console.log('file was written');
// })



// directories
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('folder created')
//     }
// })

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }else{
//             console.log('folder created')
//         }
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         console.log('File is already exist,');
//         console.log('wait for us to remove it first...')
//         console.log('file started to delete... please wait...');
//         const stp = setInterval(() => {
//             console.log('deleting...')
//         }, 1000)

//         setTimeout(()=>{
//             if (err) {
//                 console.log(err);
//             }else{
//                 console.log('folder removed')
//                 clearInterval(stp);
//             };
//         },5000)
//     })
// }


// deleting files
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