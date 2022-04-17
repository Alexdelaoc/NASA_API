const express = require('express');
const router = express.Router();
/* const controllers = require('../controllers/controllers') */

router.get('/', (req, res) => {
    res.json({ msg: "Welcome to the Nasa API !!"})
})

// Rutas para los Landings
router.get('/astronomy/landings?minimum_mass',)
router.get('/astronomy/landings/mass/:mass',)
router.get('/astronomy/landings/class/:class',)
router.get('/astronomy/landings?from&to',)
router.post('/astronomy/landings/create',)
router.put('/astronomy/landings/edit',)
router.delete('/astronomy/landings/delete',)

// Ruta para los NEAs
router.get('/astronomy/neas?',)

module.exports = router;