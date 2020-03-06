const express = require('express');
const morgan = require('morgan');

const routes = require('./routes.js');

const path = require('path');

const app = express();

module.exports.app = app;

let PORT = 3000;

// ===== middleware
app.use(express.json());
app.use(morgan('dev'));

// ===== serve client files
app.use(express.static(path.join(__dirname, '../', 'client/dist')));

// ===== routes
app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

