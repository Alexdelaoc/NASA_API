// Requerimentos
const res = require('express/lib/response')
const LandingsModel = require('../modules/landingsModels')
const NeasModel = require('../modules/neasModels')
require('mongoose');



// Controladores

const getLandingsByMinimumMass = async (req, res) => { // No funciona.
    const {recclass, start_date: dateFrom, end_date: dateTo} = req.query;
    const mass = parseInt(req.query.mass);

    console.log("mass", mass);
    const filter = { mass: {$gt: mass} }
    const query = await LandingsModel.find(filter).exec();
    console.log(mass, recclass, dateFrom, dateTo);
    res.status(200).json({ msg: query })
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
}

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
}

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
}


// NEAR EARTH OBJECTS (NEAs) CONTROLLERS.

const createNea = async (req, res) => {
    const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class, date } = req.body;
    // Validación del body pasado por Postman.
    try {
        const newNea = new NeasModel(req.body);
        newNea.save((err, newNea) => {
            if (err) return console.error(err);
            console.log(`${newNea.designation} saved in neas collection`)
        })
        res.status(201).json({ msg: "New Nea added: " + req.body })
    } catch (err) {
        res.status(400).json({ msg: `error ${err}` })
    }

}

const editNea = async (req, res) => {
    try {
        const { _id } = req.body;
        const filter = { id: _id };
        const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class } = req.body;

        const update =  {
            designation: designation,
            discovery_date: discovery_date,
            h_mag: h_mag,
            moid_au: moid_au,
            q_au_1: q_au_1,
            q_au_2: q_au_2,
            period_yr: period_yr,
            i_deg: i_deg,
            pha: pha,
            orbit_class: orbit_class
        }

        const doc = await NeasModel.findOneAndUpdate(filter, update, { new: false });
        await doc.save();

        res.status(201).json({ msg: `Neas` })
    } catch (err) {
        res.status(400).json({ msg: "Bad Request", err: err })
    }
}

const deleteNea = async (req, res) => {
    try {
        const { designation } = req.body;
        const filter = { designation: designation }
        NeasModel.deleteOne(filter, function (err) {
            if (err) return handleError(err);
        });
        res.status(200).json({ msg: `neas with designation: ${designation} has been deleted` })
    } catch (err) {
        res.status(400).json({ msg: "Bad Request" })
    }
}


const controllers = {
    getLandingsByMinimumMass,
    getLandingsByMass,
    getLandingsByClass,
    createLanding,
    editLanding,
    deleteLanding,
    createNea,
    editNea,
    deleteNea
}

module.exports = controllers