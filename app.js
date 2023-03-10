const express = require('express');
let app = express();



// set the view engine to ejs
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080')