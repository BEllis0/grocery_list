//db connection
const db = require('../db.js').db;

//exports obj
module.exports = {

    //for all groceries
    groceries: {
        //get req
        get: function() {
            return new Promise((resolve, reject) => {
                db.query('SELECT * FROM groceries', (err, res, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        },
        //post req
        post: function(item) {
            console.log(typeof db)
            return new Promise((resolve, reject) => {
                db.query(`INSERT INTO groceries (name, quantity) VALUES ("${item.name}", ${item.quantity})`, (err, res, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            })
        },
    }

};


