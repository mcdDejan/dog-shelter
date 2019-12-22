const db = require('../database');

// Add new dog
addNewDogQuery = (dog) => {
    const sql = 'INSERT INTO dogs(name, age, idChip, earring, catchDate, catchLocation, status, note) VALUES(?, ?, ?, ?, NOW(), ?, ?, ?)';
    const dogData = [dog.name, dog.age, dog.idChip, dog.earring, dog.catchLocation, dog.status, dog.note]
    return new Promise((resolve, reject) => {
        db.query(sql, dogData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

// Add characteristics
addDogCharQuery = (dogChar) => {
    const sql = 'INSERT INTO characteristics(sex, size, colorOne, colorTwo, fur, dogId) VALUES(?, ?, ?, ?, ?, ?)';
    const dogData = [dogChar.sex, dogChar.size, dogChar.colorOne, dogChar.colorTwo, dogChar.fur, dogChar.dogId]
    return new Promise((resolve, reject) => {
        db.query(sql, dogData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

// Add dog Breed
addBreedQuery = (breed) => {
    const sql = 'INSERT INTO breeds(primaryBreed, secondaryBreed, mixed, unknownBreed, dogId) VALUES(?, ?, ?, ?, ?)';
    const dogData = [breed.primaryBreed, breed.secondaryBreed, breed.mixed, breed.unknownBreed, breed.dogId]
    return new Promise((resolve, reject) => {
        db.query(sql, dogData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

// Add Medical Record
addMedRecQuery = (med) => {
    const sql = 'INSERT INTO medicalRecords(rabiesVaccine, parasiteTreatment, neutering, note, dogId) VALUES(NOW(), NOW(), NOW(), ?, ?)';
    const dogData = [med.note, med.dogId];
    return new Promise((resolve, reject) => {
        db.query(sql, dogData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

//Update dog
updateDogQuery = (dog, dogId) => {
    const sql = 'UPDATE dogs SET idChip = ?, earring = ?, releaseDate = ?, status = ?, note = ? WHERE id = ?';
    const dogData = [dog.idChip, dog.earring, dog.releaseDate, dog.status, dog.note, dogId]
    return new Promise((resolve, reject) => {
        db.query(sql, dogData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
          });
    });
};

// Get all dogs
getAllDogsQuery = () => {
    const sql = 'SELECT name, primaryBreed, mixed, age, sex FROM dogs RIGHT JOIN breeds ON dogs.id = breeds.dogId INNER JOIN characteristics ON dogs.id = characteristics.dogId WHERE status NOT LIKE "%ed" ORDER BY age LIMIT 10';
    return new Promise((resolve, reject) => {
        db.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

// Get specific dog
getSpecificDogQuery = (params) => {

    const filterKeys = Object.keys(params).map(v => `${v} = ?`).join(' AND ');
    const filterValues = Object.values(params);


    const sql = `SELECT name, primaryBreed, age, sex FROM dogs INNER JOIN breeds ON dogs.id = breeds.dogId INNER JOIN characteristics ON dogs.id = characteristics.dogId WHERE ${filterKeys} AND status NOT LIKE "%ed" ORDER BY age`;
    
    return new Promise((resolve, reject) => {
        db.query(sql, filterValues, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

// Get dog details
getDogDetailsQuery = (id) => {
   
    const sql = `SELECT name, primaryBreed, mixed, age, sex, size, colorOne, colorTwo, fur, catchLocation, catchDate, status, neutering, medicalRecords.note, dogs.note FROM dogs INNER JOIN breeds ON dogs.id = breeds.dogId INNER JOIN characteristics ON dogs.id = characteristics.dogId LEFT JOIN medicalRecords ON dogs.id = medicalRecords.dogId WHERE dogs.id = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, id, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};


module.exports = {
    addNewDogQuery,
    addDogCharQuery,
    addBreedQuery,
    addMedRecQuery,
    updateDogQuery,
    getAllDogsQuery,
    getSpecificDogQuery,
    getDogDetailsQuery
}