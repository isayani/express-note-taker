const path = require('path');
const app = require('express').Router();

// GET requests
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/test.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;