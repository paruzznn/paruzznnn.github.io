const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('C:/Users/USER/Desktop/มาจบ/')));

app.get('/', function(req,res){
    res.sendFile(path.join('C:/Users/USER/Desktop/มาจบ/index.html'))
});
app.get('/index', function(req,res){
    res.sendFile(path.join('C:/Users/USER/Desktop/มาจบ/index.html'))
});
app.get('/Experience', function(req,res){
    res.sendFile(path.join('C:/Users/USER/Desktop/มาจบ/Experience.html'))
});
app.get('/Projects', function(req,res){
    res.sendFile(path.join('C:/Users/USER/Desktop/มาจบ/Projects.html'))
});
app.get('/Contact', function(req,res){
    res.sendFile(path.join('C:/Users/USER/Desktop/มาจบ/Contact.html'))
});
app.listen(3000, function(){
    console.log('Server listening on port http://localhost:3000/')
});