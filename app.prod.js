const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.set('port', port);

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;