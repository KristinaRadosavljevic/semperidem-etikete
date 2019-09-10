var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
app.use(express.json());

app.listen(3000);
app.use(express.static('public'));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'semperidem.mailer@gmail.com',
        pass: '32847sj!kdn'
    },
    tls: {
        rejectUnauthorized: false
    }
});

//Get for home and category pages HTML
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/home.html'));
});
app.get('/kartonske-etikete', function(req, res){
    res.sendFile(path.join(__dirname + '/public/kartonske-etikete.html'));
});
app.get('/poklon-cestitke', function(req, res){
    res.sendFile(path.join(__dirname + '/public/poklon-cestitke.html'));
});
app.get('/tagovi', function(req, res){
    res.sendFile(path.join(__dirname + '/public/tagovi.html'));
});

//Send mail from contact form
app.post('/form-submit', function(req, res){
    console.log(req.body);
    var text = '<p><b>Poruka od:</b> ' + req.body.name + '</p><p><b>Email adresa:</b> ' + 
    req.body.email + '</p><p><b>Poruka:</b> ' + req.body.message;
    var mailOptions = {
        from: 'semperidem.mailer@gmail.com',
        to: 'etikete.semperidem@gmail.com',
        subject: 'SAJT KONTAKT ' + req.body.name,
        html: text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.status(parseInt(error.responseCode)).send('fail');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.status(200).send('OK');
        }
    });
});