const mongoose = require('mongoose');

const LandingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    nametype: {
        type: String,
        required: true,
        trim: true
    },
    recclass: {
        type: String,
        required: true,
        trim: true
    },
    mass: {
        type: String,
        required: true,
        trim: true
    },
    fall: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    reclat: {
        type: String,
        required: true,
        trim: true
    },
    reclong: {
        type: String,
        required: true,
        trim: true
    },
    geolocation: {
        type: Object,
        required: false,
        trim: true
    }  

})


const landingsModel = mongoose.model("landings", LandingSchema)

module.exports = landingsModel