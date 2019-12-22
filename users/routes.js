var express = require('express');
const actions = require('./actions');
const middleware = require('../middlewares/common')

var authAdmin = [middleware.verifyToken, middleware.checkToken, middleware.checkAdmin];
var authUser = [middleware.verifyToken, middleware.checkToken, middleware.checkUser];

var routes = express.Router();

routes.post('/users', actions.createUser); // Create user
routes.post('/employee', authAdmin, actions.createEmployee); // Create employee
routes.post('/login', actions.loginUser); // Login user
routes.put('/users/:id', authUser, actions.updateUser); //Update user

//routes.get('/users', actions.getAllUsers);

module.exports = routes;