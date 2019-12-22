var express = require('express');
var usersRouter = require('./users/routes');
var dogsRouter = require('./dogs/routes');
var adoptionsRouter = require('./adoption/routes')

const appRouter = express.Router();

appRouter.use(usersRouter);
appRouter.use(dogsRouter);
appRouter.use(adoptionsRouter);

module.exports = appRouter;