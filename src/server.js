const express = require('express');
const configView = require('./configs/configView.js');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3000

configView(app);

app.get('/', (req, res) => {
    res.render('Index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
