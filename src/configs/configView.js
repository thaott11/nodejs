const express = require('express'); // Sử dụng require để import express

const configView = (app) => {
    app.use(express.static('src/public'));
    app.set('view engine', 'ejs'); // Set the view engine to ejs
    app.set('views', './src/View'); // Set the views directory
}

module.exports = configView; // Xuất configView để sử dụng ở các file khác
