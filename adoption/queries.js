const db = require('../database');


//Make adoption
makeAdoptionQuerry = (reqId) => {
    const sql = 'INSERT INTO adoptions (adoptionDate, userId, dogId) VALUES (NOW(), ?, ?);'
    return new Promise ((resolve, reject) => {
        db.query(sql, [reqId.userId, reqId.dogId], (error, results, fields) => {
            if (error) {
                reject (error);
            } else {
                resolve(results);
            };
            });
    });
};

// Get all adoptions
getAllAdoptionsQuerry = () => {
    const sql = 'SELECT dogs.name, adoptions.adoptionDate, CONCAT(users.name, " ", users.surname) AS "adopted by", users.city FROM adoptions INNER JOIN users ON users.id = adoptions.userId INNER JOIN dogs ON dogs.id = adoptions.dogId;';
    return new Promise ((resolve, reject) => {
        db.query(sql, (error, results, fields) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

// Get adoptions in specific date
getAdoptionsOnDateQuerry = (date) => {
    const sql = "SELECT DATE_FORMAT (adoptionDate, '%d-%m-%Y') AS 'adoption date', CONCAT(users.name, ' ', users.surname) AS 'adopted by', dogs.name FROM adoptions INNER JOIN users ON users.id = adoptions.userId INNER JOIN dogs ON dogs.id = adoptions.dogId WHERE adoptionDate BETWEEN ? AND ?;"
    return new Promise ((resolve, reject) => {
        db.query(sql, [date.startDate, date.endDate], (error, results, fields) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

// Get adoptions by specific user
getAdoptionsByUserQuerry = (userId) => {
    const sql = 'SELECT adoptionDate, dogId, dogs.name FROM adoptions INNER JOIN dogs ON dogs.id = adoptions.dogId WHERE adoptions.userId = ? ORDER BY adoptionDate DESC;'
        return new Promise ((resolve, reject) => {
        db.query(sql, [userId], (error, results, fields) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

// Get number of adoptions (all and for specific user)
// All
getAdoptionsCountQuerry = () => {
    const sql = 'SELECT COUNT(userId) AS "Number of adoptions" FROM adoptions;'
    return new Promise ((resolve, reject) => {
        db.query(sql, (error, results, fields) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

//Specific User
getAdoptionsCountUserQuerry = (userId) => {
    const sql = 'SELECT COUNT(userId) AS "Number of adoptions by user" FROM adoptions WHERE userId = ?;'
            return new Promise ((resolve, reject) => {
        db.query(sql, [userId], (error, results, fields) => {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};


module.exports = {
    makeAdoptionQuerry,
    getAllAdoptionsQuerry,
    getAdoptionsOnDateQuerry,
    getAdoptionsByUserQuerry,
    getAdoptionsCountQuerry,
    getAdoptionsCountUserQuerry
}