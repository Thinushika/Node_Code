const express = require('express');

// express app
const app = express();

// register view engine
app.set('view-engine','ejs');

app.get('/', (req, res) => {
    res.sendFile('./clientServer/views/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile('./clientServer/views/about.html');
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404
app.use((req,res)=>{
    res.status(404).sendFile('./clientServer/views/404.html')
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

// listen for requests
app.listen(3000);

