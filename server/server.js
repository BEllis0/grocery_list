const express = require('express');
const morgan = require('morgan');

const path = require('path');

const app = express();
let PORT = 3000;

// ===== middleware


// ===== serve client files
app.use(path.join(__dirname, '../client/dist/'));





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});