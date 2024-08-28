import express from 'express';
import { CreateUser, GetAllUsers } from '../controller/apiController.js';

const route = express.Router();

const ApiRoute = (app) => {
    route.get('/users', GetAllUsers);
    route.post('/createUser', CreateUser);
    return app.use('/api/v1', route);
};

export default ApiRoute;
