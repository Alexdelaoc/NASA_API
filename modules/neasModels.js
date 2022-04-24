const mongoose = require('mongoose');

const NeasSchema = new mongoose.Schema({
    designation: {
        type: String,
        required: false,
        trim: true
    },
    discovery_date: {
        type: String,
        required: true,
        trim: true
    },
    h_mag: {
        type: String,
        required: true,
        trim: true
    },
    moid_au: {
        type: String,
        required: true,
        trim: true
    },
    q_au_1: {
        type: String,
        required: true,
        trim: true
    },
    q_au_2: {
        type: String,
        required: true,
        trim: true
    },
    period_yr: {
        type: String,
        required: true,
        trim: true
    },
    i_deg: {
        type: String,
        required: true,
        trim: true
    },
    pha: {
        type: String,
        required: false,
        trim: true
    },
    orbit_class: {
        type: String,
        required: false,
        trim: true
    }  

})


const neasModel = mongoose.model("neas", NeasSchema);


module.exports = neasModel;