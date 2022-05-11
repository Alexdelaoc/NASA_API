// Requerimentos
const res = require('express/lib/response');
const NeasModel = require('../modules/neasModels');
require('mongoose');


// NEAR EARTH OBJECTS (NEAs) CONTROLLERS.

const getAllNeas = async (req, res) => {
    let data;
    try {
        data = await NeasModel.find({}, "-_id");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const createNea = async (req, res) => {
    const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class, date } = req.body;
    
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

const neas = {
    getAllNeas,
    createNea,
    editNea,
    deleteNea
}

module.exports = neas