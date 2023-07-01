const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.port || 3001
const fs = require('fs')
const notes = require('./db/db.json')
const routes = require ('./routes/routes.js')
app.use(express.static('routes'))
app.use(express.static('public'));

app.use(routes)

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => 
console.log(`Server on port ${PORT} listening`));
