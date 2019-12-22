var express = require('express');
const actions = require('./actions');
const middleware = require('../middlewares/common')

var authEmployee = [middleware.verifyToken, middleware.checkToken, middleware.checkEmployee];
var authAdminAndEmployee = [middleware.verifyToken, middleware.checkToken, middleware.checkAdminAndEmployee];
var authUser = [middleware.verifyToken, middleware.checkToken, middleware.checkUser];
var authIntern = [middleware.verifyToken, middleware.checkToken]


var routes = express.Router();

routes.post('/adoptions', authIntern, actions.makeAdoption); // Make adoption
routes.get('/adoptions', authAdminAndEmployee, actions.getAllAdoptions); // Get all adoptions
routes.get('/adoptions/:startDate&:endDate', authAdminAndEmployee, actions.getAdoptionsOnDate); // Adoptions in specific date
routes.get('/adoptions/:userId', authIntern, actions.getAdoptionsByUser); // Adoptions by user
routes.get('/adoptions/count/all', authAdminAndEmployee, actions.getAdoptionsCount); // No. of adoptions
routes.get('/adoptions/count/:userId', authUser, actions.getAdoptionsCountUser); // No. of adoptions by user

module.exports = routes;