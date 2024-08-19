import express from 'express';

const configView = (app) => {
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs'); // Set the view engine to ejs
    app.set('views', './src/View'); // Set the views directory
}

export default configView; // Sử dụng export default
