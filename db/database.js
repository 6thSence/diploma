const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://ds025263.mlab.com:25263/heroku_sr0fbvrw';
//const url = 'mongodb://ds025263.mlab.com:25263';
console.log(url);

module.exports.connect = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }

            return resolve(db);
        });
    });
