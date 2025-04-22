import { Router } from 'express';
import { ActividadControllers } from '../controllers/ActividadController';

const router = Router();

router.get('/', ActividadControllers.getActividadAll);
router.get('/:id', ActividadControllers.getIdActividad);
router.post('/', ActividadControllers.crearActividad);
router.put('/:id', ActividadControllers.actualizarIdActividad);  
router.delete('/:id', ActividadControllers.eliminarIdActividad);

export default router;
