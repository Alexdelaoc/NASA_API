const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Nasa API !!"})
})

// Rutas para los Landings
router.get('/astronomy/landings?minimum_mass', controllers.getLandingsByMinimumMass); // No funciona.
router.get('/astronomy/landings/mass/:mass', controllers.getLandingsByMass);
router.get('/astronomy/landings/class/:class', controllers.getLandingsByClass);
router.get('/astronomy/landings?from&to',); // No funciona.
router.post('/astronomy/landings/create', controllers.createLanding);
router.put('/astronomy/landings/edit', controllers.editLanding);
router.delete('/astronomy/landings/delete', controllers.deleteLanding);

// Ruta para los NEAs
router.get('/astronomy/neas?',)
router.post('/astronomy/neas/create', controllers.createNea)
router.put('/astronomy/neas/edit/', controllers.editNea)
router.delete('/astronomy/neas/delete', controllers.deleteNea)

module.exports = router;