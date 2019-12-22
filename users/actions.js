const { emailValidator } = require('../helper');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var queries = require('./queries');
const db = require('../database');


// Create user
createUser = async(req, res, next) => {
    //CHECK IF EMAIL EXISTS
    const userEmail = await getEmailQuery(req.body.email);
    if (userEmail.length != 0) {
        var error = new Error("E-mail already exists!");
        error.status = 401;
        next(error);
    };

    let isValid = emailValidator(req.body.email);
    if (!isValid) {
        var error = new Error("Please enter a valid e-mail!");
        error.status = 401;
        next(error);
    }
    else {
        try {
            const userRequest = req.body;
            const passHash = bcrypt.hashSync(userRequest.password, 10);
            await createUserQuery(userRequest, passHash);
            res.status(201).json({message: 'User created'});
        }
        catch (error) {
            res.status(500).send(error.message)
        };
    };
};

createEmployee = async(req, res, next) => {
    const userEmail = await getEmailQuery(req.body.email);
    if (userEmail.length != 0) {
        var error = new Error("E-mail already exists!");
        error.status = 401;
        next(error);
    };
    
    let isValid = emailValidator(req.body.email);
    if (!isValid) {
        var error = new Error("Please enter a valid e-mail!");
        error.status = 401;
        next(error);
    }
    else {
        try {
            const userRequest = req.body;
            const passHash = bcrypt.hashSync(userRequest.password, 10);
            await createUserQuery(userRequest, passHash, 1);
            res.status(201).json({message: 'New employee created!'});
        }
        catch (error) {
            res.status(500).send(error.message)
        };
    };
};

// Login na user
loginUser = async(req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    try {
        var user = await getUserByEmailQuery(email);
        var dbUser = user[0];
        const matchPass = bcrypt.compareSync(pass, dbUser.password);
        if (matchPass) {
            const secret = "secret";
            const token = jwt.sign({dbUser}, secret, { expiresIn: '24h'});
            res.status(200).json(token); }
        else {
            res.status(401).json({message: 'Wrong password!'});
        }
        
    } catch (error) {
        res.status(500).send(error);
    };
};

//Update user
updateUser = async(req, res) => {
    const userRequest = req.body;
    const userId = req.params.id;
    try {
        const user = await queries.updateUserQuery(userRequest, userId);
        res.status(201).json({message: 'User updated successfully!'});
    } catch (error) {
        res.status(500).send(error)
    }
};


// Delete user -soft


module.exports = {
    createUser,
    createEmployee,
    loginUser,
    updateUser
}