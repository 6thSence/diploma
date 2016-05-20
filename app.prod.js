const path = require('path');
const express = require('express');

const app = express();

app.set('port', port);

app.use(express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
