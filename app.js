const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const appRouter = require('./router');
const middleware = require('./middlewares/common')
const jwt = require('express-jwt');

app.use(middleware.logger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: '*/*' }));

const publicRoutes = ['/api/login', '/api/users', /^\/api\/dogs\/.*/, '/api/dogs', '/api/filter-dogs'];
app.use(jwt({ secret: 'secret'}).unless({path: publicRoutes}));

app.use('/api', appRouter);

app.use(middleware.wrongRoute);
app.use(middleware.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});