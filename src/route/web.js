import express from 'express';

let route = express.Router();

const RouteWeb = (app) => {
    route.get('/', (req, res) => {
        res.render('index'); // Đảm bảo rằng bạn có tệp `index.ejs` trong thư mục views
    });
    return app.use('/', route);
};

export default RouteWeb;
