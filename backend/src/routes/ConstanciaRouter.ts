
import { Router } from 'express';


import { ConnstanciaController } from '../controllers/ConstanciaController';



const router = Router();



router.get('/', ConnstanciaController.getAll);
router.post('/', ConnstanciaController.crearConstancia)
router.put('/', ConnstanciaController.actualizarConstancia)
router.delete('/', ConnstanciaController.eliminarConstancia)



export default router

