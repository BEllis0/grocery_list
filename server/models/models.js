//db connection
const db = require('../db.js');

//exports obj
module.exports = {

    //for all groceries
    groceries: {
        //get req
        get: function() {
            return new Promise((resolve, reject) => {
                db.db.query('SELECT * FROM groceries', (err, res, fields) => {
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
            console.log(item.name, item.quantity)
            return new Promise((resolve, reject) => {
                db.db.query(`INSERT INTO groceries (name, quantity) VALUES ("${item.name}", ${item.quantity})`, (err, res, fields) => {
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


