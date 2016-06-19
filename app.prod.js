const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.set('port', port);

app.use('/static', express.static(path.join(__dirname, 'static')));

module.exports = app;