import express from 'express';
import configView from './configs/configView.js';
import RouteWeb from './route/web.js';
import dotenv from 'dotenv';
import apiRoute from './route/api.js';
import morgan from 'morgan'
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

// hander xử lý midderware
app.use((req, res, next) => {
    console.log(req.method);
    next();
})

app.use(morgan('combined'))
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.set('view engine', 'ejs');

// Configure view directory
configView(app);

// Set up routes
RouteWeb(app);

// Config API routes
apiRoute(app);


// config 404
app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
