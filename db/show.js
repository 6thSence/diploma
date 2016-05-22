const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

const show = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }
            const questions = db.collection('questions');
            const users = db.collection('users');

            console.log('Show Quesctions:');
            questions.find().toArray(function (err, docs) {
                console.log(docs);
            });

            console.log('Show Users:');
            users.find().toArray(function (err, docs) {
                console.log(docs);
            });
        });

        return resolve(db);
    });

show();