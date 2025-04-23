import { Router } from 'express';
import { body,param } from 'express-validator';
import {handleInputErrors} from '../middleware/validation'
import {validateAlquilerBody,validateIdAlquiler, validateIdAlquilerYaExiste,} from '../middleware/AlquilerElementos';
import { AlquilerElementosControllers } from '../controllers/AlquilerElementoControllers';




const router = Router();

// Obtener todas las actividades
router.get('/', AlquilerElementosControllers.getAlquilerElementosAll);

// Obtener una actividad por ID
router.get('/:IdAlquiler',
  validateIdAlquiler,
  handleInputErrors,
  AlquilerElementosControllers.getIdAlquiler
);

// Crear una actividad (nombre único)
router.post(
'/',
  validateIdAlquilerYaExiste,
  validateAlquilerBody,
  handleInputErrors,
  AlquilerElementosControllers.crearAlquiler
);

// Actualizar una actividad por ID (no se valida si el nombre ya existe)
router.put(
  '/:IdAlquiler',
  validateIdAlquiler,
  validateAlquilerBody,
  handleInputErrors,
  AlquilerElementosControllers.actualizarIdAlquiler
);

// Eliminar una actividad por ID
router.delete(
  '/:IdAlquiler',
  validateIdAlquiler,
  handleInputErrors,
  AlquilerElementosControllers.eliminarIdAlquiler
);

export default router;
