import { Router } from 'express';
import {RelUsuarioEventoControllers} from '../controllers/RelUsuarioEventoController';

const router = Router();

router.get('/', RelUsuarioEventoControllers.getAll)
router.post('/', RelUsuarioEventoControllers.crearRelUsuarioEvento)
router.put('/', RelUsuarioEventoControllers.actualizarRelUsuarioEvento)
router.delete('/', RelUsuarioEventoControllers.eliminarRelUsuarioEvento)

export default router