import express from 'express';
import configView from './configs/configView.js';
import RouteWeb from './route/web.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Configure view directory
configView(app);

// Set up routes
RouteWeb(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
