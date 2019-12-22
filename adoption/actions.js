require('./queries');
const db = require('../database');

//Make adoption
makeAdoption = async(req, res) => {
    const reqId = req.body;
    try {
        const adoption = await makeAdoptionQuerry(reqId);
        if(adoption)  {
            const update = 'UPDATE dogs SET status = "adopted" WHERE id = ?;'
            db.query(update, reqId.dogId, (error, results) => {
                if(error) throw error;
            });
        };
        res.status(200).json({message: 'Dog adopted'});
    } catch (error) {
        res.status(500).send(error.message);
    };    
};


// Get all adoptions
getAllAdoptions = async(req, res) => {
    try {
        const adoptions = await getAllAdoptionsQuerry();
        res.status(200).send(adoptions);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

// Get adoptions in specific date
getAdoptionsOnDate = async(req, res) => {
    const date = req.params
    try {
        const adoptions = await getAdoptionsOnDateQuerry(date);
        res.status(200).send(adoptions);
    } catch (error) {
        res.status(500).send(error.message);
    };
};


// Get adoptions by specific user
getAdoptionsByUser = async(req, res) => {
    const userId = req.params.userId
    try {
        const adoptions = await getAdoptionsByUserQuerry(userId);

        if (adoptions.toString() == []) {
            res.json({message: 'No adoptions yet'});
        } else {
        res.status(200).send(adoptions); }
    } catch (error) {
        res.status(500).send(error.message);
    };
};


// Get number of adoptions (all and for specific user)
// All
getAdoptionsCount = async(req, res) => {
    try {
        const adoptionsCount = await getAdoptionsCountQuerry();
        res.status(200).send(adoptionsCount);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

//Specific User
getAdoptionsCountUser = async(req, res) => {
    const userId = req.params.userId
    try {
        const adoptions = await getAdoptionsCountUserQuerry(userId);
        res.status(200).send(adoptions);
        console.log(adoptions)
    } catch (error) {
        res.status(500).send(error.message);
    };
};


module.exports = {
    makeAdoption,
    getAllAdoptions,
    getAdoptionsOnDate,
    getAdoptionsByUser,
    getAdoptionsCount,
    getAdoptionsCountUser
}