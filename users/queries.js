const db = require('../database');


// Create user 
getEmailQuery = (email) => {
    const sql = "SELECT email FROM users WHERE email = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [email], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};

createUserQuery = (uReq, pass, isEmployee = 0, isAdmin = 0) => {
    const sql = 'INSERT INTO users(name, surname, isAdmin, isEmployee, email, password, phoneNo, city, address, registerDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW());';
    const userData = [uReq.name, uReq.surname, isAdmin, isEmployee, uReq.email, pass, uReq.phoneNo, uReq.city, uReq.address];
    return new Promise((resolve, reject) => {
        db.query(sql, userData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};

// Login na user
getUserByEmailQuery = (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [email], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};

//Update user
updateUserQuery = (user, id) => {
    const sql = 'UPDATE users SET name = ?, surname = ?, email = ?, phoneNo = ?, city = ?, address = ? WHERE id = ?';
    const info = [user.name, user.surname, user.email, user.phoneNo, user.city, user.address, id];

    return new Promise((resolve, reject) => {
        db.query(sql, info, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                if(results.affectedRows == 0) {
                    reject("ID doesn't exists. Try different ID")
                }
                resolve(results);
            }
          });
    });
};


module.exports = {
    getEmailQuery,
    createUserQuery,
    getUserByEmailQuery,
    updateUserQuery
}