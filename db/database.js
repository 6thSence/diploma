const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://6thsence:pushgroupnsk17@ds025263.mlab.com:25263/heroku_sr0fbvrw';

module.exports.connect = () =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (err) {
                return reject(err);
            }

            return resolve(db);
        });
    });
