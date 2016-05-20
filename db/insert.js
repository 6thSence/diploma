const mongodb = require('mongodb');

const quesctions = require('./questions');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

module.exports.insert = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }
            const collection = db.collection('questions');
            collection.remove();
            collection.insert(quesctions, (err, result) => {
                    if (err) return err;
                    console.log(result);
                });
        });

        return resolve(db);
        });
