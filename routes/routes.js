const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
router.get('/api', (req, res) => {

});

//retrieve notes
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data)
       console.log(notes);
        res.json(notes);
    });
});

router.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        req.body.id = uuidv4()
        const notes = JSON.parse(data);
        notes.push(req.body);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });
});

//delete notes
router.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data)
        console.log(notes);
        const newNotes = notes.filter(note => note.id !=id)
        fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err) => {
            if (err) throw err;
            res.json(newNotes);
        });
        
    });
});

module.exports = router
