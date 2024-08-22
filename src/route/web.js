import express from 'express'
import homeController from '../controller/homeController.js'

let route = express.Router()

route.get('/', homeController.getHome);
route.get('/user/:id', homeController.getUserDetail)
route.get('/create', homeController.renderCreateUserForm)
route.post('/create', homeController.CreateUser)
route.get('/update/:id', homeController.renderUpdateForm)
route.post('/update/:id', homeController.updateUser)
route.post('/delete/:id', homeController.deleteUser)


const RouteWeb = (app) => {
    return app.use('/', route)
}

export default RouteWeb
