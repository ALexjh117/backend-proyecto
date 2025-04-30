import { Router } from 'express';
import { body,param } from 'express-validator';
import { PlanificacionEventoControllers } from '../controllers/PlanificacionEventoController';
import {handleInputErrors} from '../middleware/validation'
import {validatePlanificacionEventoBody,validateIdPlanificarE,validateIdPlanificarEYaExiste,} from '../middleware/PlanificacionEvento';

const router = Router();

// Obtener todas las Planificaciones
router.get('/', PlanificacionEventoControllers.getPlanificacionEventoAll);

// Obtener una Planificacion por ID
router.get('/:IdPlanificarE',
  validateIdPlanificarE,
  handleInputErrors,
  PlanificacionEventoControllers.getIdPlanificarE
);

// Crear una Planificacion (nombre único)
router.post(
'/',
  validateIdPlanificarEYaExiste,
  validatePlanificacionEventoBody,
  handleInputErrors,
  PlanificacionEventoControllers.crearPlanificacionEvento
);

// Actualizar una planificacion por ID (no se valida si el nombre ya existe)
router.put(
  '/:IdPlanificarE',
  validateIdPlanificarE,
  validatePlanificacionEventoBody,
  handleInputErrors,
  PlanificacionEventoControllers.actualizarIdPlanificarE
);

// Eliminar una planificacion por ID
router.delete(
  '/:IdPlanificarE',
  validateIdPlanificarE,
  handleInputErrors,
  PlanificacionEventoControllers.eliminarIdPlanificarE
);

export default router;