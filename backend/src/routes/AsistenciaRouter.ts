
import { Router } from 'express';

import {AsistenciaControllers} from '../controllers/AsistenciaController';



const router = Router();



router.get('/', AsistenciaControllers.getAll)
router.post('/', AsistenciaControllers.crearAsistencia)
router.put('/', AsistenciaControllers.actualizarAsistencia)
router.delete('/', AsistenciaControllers.eliminarAsistencia)




export default router

