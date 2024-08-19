import express from 'express';
import configView from './configs/configView.js';
import RouteWeb from './route/web.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// lấy dũ liệu từ file config
configView(app);

// lấy dữ liệu từ route 
RouteWeb(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
