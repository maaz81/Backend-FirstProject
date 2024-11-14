const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.send('server reloaded')
    
})

app.get('/profile', function(req,res){
    res.send('profile reloaded')
})



app.listen(3000)