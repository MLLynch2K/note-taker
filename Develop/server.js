const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.get('/', function(req,res){
    console.log('__DIRNAME--->', __dirname)
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/test', function(req,res){
    res.send()
})

app.listen(PORT, function(){
   console.log( 'server listening on port 3000')
})

