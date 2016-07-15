const ObjectId = require('mongodb').ObjectID;
const express = require('express');

const database = require('./db/database.js');

const app = express();

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

app.get('/users', (req, res) => {
    database
        .connect()
        .then((db) => {
            db.collection('users')
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

app.get('/user/:userId', (req, res) => {
    database
        .connect()
        .then((db) => {
            db.collection('users')
            .findOne({
                "_id": new ObjectId(req.params.userId)
            }, (err, doc) => {
            res.send(doc);
        });

        })
        .catch((err) => res.send(err));
});

app.get('/userUpd/:userId', (req, res) => {
        database
        .connect()
        .then((db) => {
            db.collection('users')
            .findAndModify({
                    "_id": new ObjectId(req.params.userId)
                },
                [['_id','asc']],
                {
                    "$set": { "points": req.query.points }
                },
                {},
                (err, doc) => {
                    if (err) res.send(err);
                    res.send(doc);
                });
        })
        .catch((err) => res.send(err));

    });

app.get(['/', '/auth', '/home', '/profile', '/challenges', '/results', '/share'], (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

module.exports = app;