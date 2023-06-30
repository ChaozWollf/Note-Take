const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001
const fs = require('fs')
// const notes = (/public/notes.html) 

app.use(express.static('public'));

app.get('/', (req,res ) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api')

fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));

});

// app.get('/api/notes', (req, res) => {



app.listen(PORT, () => 
console.log('Server on port 3001 listening'));
