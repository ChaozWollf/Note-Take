const express = require('express')
const app = express()
const fs = require('fs')

app.get('/api', (req, res) => {

});

//retrieve notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        res.json(notes)
    });
});

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        notes.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });
});

//save notes
// app.post('/api/notes', (req, res) => {
//     fs.readFile('./db/db.json', (err, data) => {
//         if (err) throw err;
//         res.json(JSON.parse(data));
//         res.json.push(notes, data);
//         fs.writeFile('./db.db.json', notes, (err))
//         if (err) throw err;
//         res.json(JSON.stringify(notes))

//         res.json(notes)

//     });
// });


//delete notes
app.delete('/api/notes', (req, res) => {
    res.json()
});
