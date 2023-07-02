app.get('/notes', (req, res) => {
    res.send(
        `<p>${notes.html}</p>`
    );
});

app.get('*', (req, res) => {
    res.send(
        `<p>${index.html}</p>`
    );
});