const model = require('../models/models.js');

module.exports = {
    groceries: {
        get: function(req, res) {
            console.log(req.body)
            model.groceries.get()
                .then(groceries => {
                    console.log(groceries);
                    res.status(200);
                    res.json(groceries);
                })
                .catch(err => {
                    res.status(400);
                    res.send(err);
                })
        },
        post: function(req, res) {
            model.groceries.post(req.body)
                .then(() => {
                    res.status(201);
                    res.send('Item added');
                })
                .catch(err => {
                    res.status(400);
                    res.send(err);
                })
        },
        update: function(req, res) {
            //add functionality to update groceries
        },
        delete: function(req, res) {
            //add functionality to delete groceries
        }
    }
};