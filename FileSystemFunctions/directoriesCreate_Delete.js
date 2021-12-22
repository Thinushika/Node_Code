const fs = require('fs');

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log('folder created')
        }
    })
}else{
    fs.rmdir('./assets', (err) => {
        console.log('File is already exist,');
        console.log('wait for us to remove it first...')
        console.log('file started to delete... please wait...');
        const stp = setInterval(() => {
            console.log('deleting...')
        }, 1000)

        setTimeout(()=>{
            if (err) {
                console.log(err);
            }else{
                console.log('folder removed')
                clearInterval(stp);
            };
        },5000)
    })
}