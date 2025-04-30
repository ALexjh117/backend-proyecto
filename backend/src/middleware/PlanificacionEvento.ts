import { Request, Response, NextFunction } from "express";
import { param, validationResult, body } from 'express-validator';
import { PlanificacionEvento } from "../models/PlanificacionEvento";

// Valida el ID de la planificacion del evento
export const validateIdPlanificarE = async (req: Request, res: Response, next: NextFunction) => {
  await param('IdPlanificarE')
    .isInt().withMessage('Id no válido')
    .custom(value => value > 0).withMessage('Id no válido')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

// Valida si el nombre de la planificacion ya existe
export const validateIdPlanificarEYaExiste = async (req: Request, res: Response, next: NextFunction) => {
  await body('NombreEvento')
    .custom(async (value) => {
      const planificacionExistente = await PlanificacionEvento.findOne({
        where: { NombreEvento: value },
      });
      if (planificacionExistente) {
        throw new Error('Esta planificacion de evento ya está registrada');
      }
      return true;
    })
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

// Valida el cuerpo de la planificacion
export const validatePlanificacionEventoBody = async (req: Request, res: Response, next: NextFunction) => {
  await body('NombreEvento')
    .notEmpty().withMessage('El nombre de la planificacion de evento no puede estar en blanco')
    .isLength({ max: 150 }).withMessage('El nombre de la planificacion de evento no puede tener más de 150 caracteres')
    .run(req);

  await body('FechaEvento')
    .notEmpty().withMessage('La fecha del evento no puede estar en blanco')
    .isISO8601().withMessage('La fecha del evento debe tener un formato válido (YYYY-MM-DD)')
    .run(req);

  await body('LugarDeEvento')
    .notEmpty().withMessage('El Lugar De Evento no puede estar en blanco')
    .isString().withMessage('El Lugar De Evento debe ser un texto')
    .isLength({ max: 50 }).withMessage('El Lugar De Evento no puede tener más de 50 caracteres')
    .run(req);

  await body('Recursos')
    .notEmpty().withMessage('Los Recursos no pueden estar en blanco')
    .isString().withMessage('Los Recursos a utilizar deben ser muy detallados')
    .run(req);

    await body('IdPlanificarE')
    .notEmpty().withMessage('El ID de la planificacion no puede estar en blanco')
    .isInt({ min: 1 }).withMessage('El ID de la planificacion debe ser un número entero positivo')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};
