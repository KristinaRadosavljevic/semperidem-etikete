var express = require('express');
var app = express();
var path = require('path');
app.use(express.json());

app.listen(3000);
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.post('/form-submit', function(req, res){
    console.log(req.body);
    res.send('success');
});