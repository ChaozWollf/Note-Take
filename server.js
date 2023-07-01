const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.port || 3001
const fs = require('fs')
const notes = require('./db/db.json')
app.use(express.static('public'));




app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api', (req, res) => {

});

app.get('/api/notes',(req,res) => {
   fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    res.json(notes)
});
});  
app.post('/api/notes',(req,res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        res.json.push(notes, data);
        fs.writeFile('./db.db.json', notes, (err))
        if (err) throw err;
        res.json(JSON.stringify(notes))

    res.json(notes)    

});
});

app.delete('/api/notes', (req, res) => {
    res.json()
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => 
console.log(`Server on port ${PORT} listening`));
