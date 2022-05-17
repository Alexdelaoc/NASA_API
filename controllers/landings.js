// REQUERIMENTOS
const res = require('express/lib/response')
const LandingsModel = require('../modules/landingsModels')
require('mongoose');


// CONTROLADORES //

// LANDINGS //

const getAllLandings = async (req, res) => {
    let data;
    try {
        data = await LandingsModel.find({}, "-_id");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const getLandingsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const filter = { name: name }
        const query = await LandingsModel.find(filter).exec();
        if (query == 0) {
            res.status(200).json({ msg: "No such landings for the name provided." })
        } else {
            res.status(200).json(query)
        }
    } catch (err) {
        console.log(err)
        res.status(400)
    }
};

const getLandingsByMass = async (req, res) => {
    try {
        const mass = parseInt(req.params.mass)
        const filter = { mass: mass }
        const query = await LandingsModel.find(filter).exec();
        if (query == 0) {
            res.status(200).json({ msg: "No such landings for the mass provided." })
        } else {
            res.status(200).json(query)
        }
    } catch (err) {
        console.log(err)
        res.status(400)
    }
};

const getLandingsByClass = async (req, res) => {
    try {
        const recclass = req.params.class
        const filter = { recclass: recclass }
        const query = await LandingsModel.find(filter).exec();
        if (query == 0) {
            res.status(200).json({ msg: "No such landings for the class provided." })
        } else {
            res.status(200).json(query)
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Bad Request" })
    }
};

const createLanding = async (req, res) => {
    const { name, id, nametype, recclass, mass, fall, year, reclat, reclong, geolocation } = req.body;
    try {
        const newLanding = new LandingsModel(req.body);
        newLanding.save((err, newLanding) => {
            if (err) return console.error(err);
            console.log(`${newLanding.name} saved.`)
        })
        res.status(201).json({ msg: "createLanding" + req.body })
    } catch (err) {
        res.status(400).json({ msg: `error ${err}` })
    }
};

const editLanding = async (req, res) => {
    try {
        const { name, id, nametype, recclass, mass, fall, year, reclat, reclong, geolocation } = req.body;
        const update = req.body;
        const filter = { id: id };
        let landingToEdit = await LandingsModel.findOneAndUpdate(filter, update, { new: true });
        res.status(201).json({ msg: `Landing with ID ${filter.id} edited and saved in the database: ` + landingToEdit })
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Bad Request." })
    }
};

const deleteLanding = async (req, res) => {
    try {
        const { id } = req.body
        const filter = { id: id }
        LandingsModel.deleteOne(filter, function (err) {
            if (err) return handleError(err);
        });
        res.status(200).json({ msg: `Landing with id: ${id} deleted.` })
    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Bad Request." })
    }
};

const landings = {
    getAllLandings,
    getLandingsByMinimumMass,
    getLandingsByName,
    getLandingsByMass,
    getLandingsByClass,
    createLanding,
    editLanding,
    deleteLanding
}

module.exports = landings