var express = require ('express')

var app = express()

app.get('/',function(req,res){res.send('Work gan mantab!')})

app.post('/',function(req,res){res.send('Ini POST Request!')})

app.put('/user/edit',function(req,res){res.send('PUT Request dijalankan!')})

app.delete('/user/edit',function(req,res){res.send('DELETE Request pada suatu user!')})

app.use(express.static('public'));

// specified port

app.listen(3000)
