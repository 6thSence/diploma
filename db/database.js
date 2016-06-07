const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
//const url = 'mongodb://6thsence:pushgroupnsk17@ds025263.mlab.com:25263/heroku_sr0fbvrw';
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
