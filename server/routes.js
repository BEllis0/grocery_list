const router = require('express').Router();
const controllers = require('./controllers/controllers.js');

//all get requests to /groceries passed to controller GET
router.get('/groceries', controllers.groceries.get);

//all post requests to /groceries/add passed to controller POST
router.post('/groceries/add', controllers.groceries.post);

module.exports = router;