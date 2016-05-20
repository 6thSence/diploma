var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.get('/bundle', (req, res) => res.sendFile(`${__dirname}/static/bundle.js`));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});