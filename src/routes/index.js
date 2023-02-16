const {Router} = require('express');
const { getMascotaById, insertMascota, UpdateMascota, deleteMascota } = require('../../controllers/mascota-controller');
const router = Router();

router.get('/mascota/:id',getMascotaById);
router.post('/mascota', insertMascota);
router.put('/mascota', UpdateMascota);
router.delete('/mascota/:id', deleteMascota);

module.exports = router; 