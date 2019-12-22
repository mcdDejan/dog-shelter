
const jwt = require('jsonwebtoken');

logger = (req, res, next) => {
    console.log(`Logged ${req.url} - ${req.method} --- ${new Date()}`);
    next();
};

wrongRoute = (req, res, next) => {
    var error = new Error("Error! Route not found!");
    error.status = 404;
    next(error);
};

errorHandler = (err, req, res, next) => {
    var errorObj = {
        status: err.status,
        error: {
            message: err.message
        }
    };

    res.status(err.status).json(errorObj);
}; 

// Verify token
verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if( typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({message: 'Forbidden!'})
    }
};

checkToken = (req, res,next) => {
    jwt.verify(req.token, 'secret', (err, authorizedData) => {
        if(err){
            res.status(403).json({message: 'Invalid Token'});
        } else {
            next()
        }
    })
}

checkEmployee = (req, res, next) => {
    jwt.verify(req.token, 'secret', (err, authorizedData) => { 
        var employee = authorizedData.dbUser.isEmployee
        if (employee == 0) {
            res.status(403).json({message: 'Employee authorization required'});
        } else { next() }
       
    })
};

checkAdmin = (req, res, next) => {
    jwt.verify(req.token, 'secret', (err, authorizedData) => { 
        var admin = authorizedData.dbUser.isAdmin
        if (admin == 0) {
            res.status(403).json({message: 'Admin authorization required'});
        } else { next() }
       
    })
}

checkAdminAndEmployee = (req, res, next) => {
    jwt.verify(req.token, 'secret', (err, authorizedData) => { 
        var admin = authorizedData.dbUser.isAdmin;
        var employee = authorizedData.dbUser.isEmployee;
        if (admin == 0 && employee == 0) {
            res.status(403).json({message: 'Admin or employee authorization required'});
        } else { next() }
       
    })
}

checkUser = (req, res, next) => {
    jwt.verify(req.token, 'secret', (err, authorizedData) => { 
        var admin = authorizedData.dbUser.isAdmin;
        var employee = authorizedData.dbUser.isEmployee;
        if (admin == 1 || employee == 1) {
            res.status(403).json({message: 'User authorization required'});
        } else { next() }
       
    })
}

module.exports = {
    logger,
    wrongRoute,
    errorHandler,
    verifyToken,
    checkToken,
    checkEmployee,
    checkAdmin,
    checkAdminAndEmployee,
    checkUser
}