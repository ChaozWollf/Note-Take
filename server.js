const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001
const notes = (/public/notes.html) 

app.use(express.static('public'));

app.get('/', (req,res ) => res.sendFile();



app.listen(PORT, () => 
console.log('Server on port 3001 listening'));
