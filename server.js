const isDevelopment = process.env.NODE_ENV === 'development';
//const app = isDevelopment ? require('./app.dev.js') : require('./app.prod.js');
const app = require('./app.dev.js');
const port = process.env.PORT || 3000;
const database = require('./db/database.js');

app.get('/db', (req, res) => {
    database
        .connect()
        .then((db) => {
            db.collection('questions')
                .find()
                .toArray((err, items) => {
                    if (err) {
                        return res.send(err);
                    }
                    return res.send(items);
                });
        })
        .catch();
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info(`Listening on port ${port}.`);
    }
});