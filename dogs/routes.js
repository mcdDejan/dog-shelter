var express = require('express');
const actions = require('./actions');
const middleware = require('../middlewares/common')

var authAdminAndEmployee = [middleware.verifyToken, middleware.checkToken, middleware.checkAdminAndEmployee];

var routes = express.Router();

routes.post('/dogs', authAdminAndEmployee, actions.addNewDog); // Add dog
routes.post('/dogChar', authAdminAndEmployee, actions.addDogChar); // Add dog char
routes.post('/breed', authAdminAndEmployee, actions.addBreed); // Add dog breed
routes.post('/medical-record', authAdminAndEmployee, actions.addMedRec); // Add med record
routes.put('/dogs/update/:id', authAdminAndEmployee, actions.updateDog); // Update dog
routes.get('/dogs/:id', actions.getDogDetails); // Get dog details
routes.get('/dogs', actions.getAllDogs); // Get all dogs
routes.get('/filter-dogs', actions.getSpecificDog); // Filter dog


module.exports = routes;