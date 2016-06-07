const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGODB_URI;

module.exports.connect = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }

            return resolve(db);
        });
    });
