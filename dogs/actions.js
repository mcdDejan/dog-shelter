require('./queries');

// Add new dog
addNewDog = async(req, res) => {
    const dog = req.body;
    try {
        const result = await addNewDogQuery(dog);
        res.status(201).json({ message: 'New dog added' });  
    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Add characteristics
addDogChar = async(req, res) => {
    const dogChar = req.body;
    try {
        const result = await addDogCharQuery(dogChar);
        res.status(201).json({ message: 'Characteristics added' });  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add dog Breed
addBreed = async(req, res) => {
    const dog = req.body;
    try {
        const result = await addBreedQuery(dog);
        res.status(201).json({ message: 'Breed added' });  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// add Medical Record
addMedRec = async(req, res) => {
    const medical = req.body;
    try {
        const result = await addMedRecQuery(medical);
        res.status(201).json({ message: 'Medical record added' });  
    } catch (error) {
        res.status(500).send(error.message);
    }
};


//Update dog
updateDog = async(req, res) => {
    const dog = req.body;
    const dogId = req.params.id;
    try {
        const result = await updateDogQuery(dog, dogId);
        res.status(201).json({message: "Dog updated successfully!"});
    } catch(error) {
        res.status(500).send(error.message);
    };
};

// Get all dogs
getAllDogs = async(req, res) => {
    try {
        const dogs = await getAllDogsQuery();
        res.status(200).send(dogs);
    } catch (error) {
        res.status(500).send(error.message);
    };
};


// Get specific dog
getSpecificDog = async(req, res, next) => {

    try {
        const filter = await getSpecificDogQuery(req.query);
        res.status(200).send(filter);
    } catch (error) {
        res.status(500).send(error.message);
    };
};


// Get dog details
getDogDetails = async(req, res) => {
    const dogId = req.params.id;
    try {
        var dogDetails = await getDogDetailsQuery(dogId);
        dogDetails = dogDetails[0];
        var color = []
        color.push(dogDetails.colorOne)
       if(dogDetails.colorTwo != null){
           color.push(dogDetails.colorTwo)
       }
        var dog = {
            name: dogDetails.name, 
            primaryBreed: dogDetails.primaryBreed,
            mixed: dogDetails.mixed, 
            age: dogDetails.age, 
            sex: dogDetails.sex, 
            size: dogDetails.size,
            color: color,
            fur: dogDetails.fur, 
            catchLocation: dogDetails.catchLocation, 
            catchDate: dogDetails.catchDate, 
            status: dogDetails.status, 
            neutering: dogDetails.neutering, 
            note: dogDetails.neutering
        };
        res.status(200).send(dog);
    } catch (error) {
        res.status(500).send(error.message);
    };
};


module.exports = {
    addNewDog,
    addDogChar,
    addBreed,
    addMedRec,
    updateDog,
    getAllDogs,
    getSpecificDog,
    getDogDetails
}