import { Request, Response, NextFunction } from "express";
import { param, validationResult, body } from 'express-validator';
import { RelUsuarioEvento } from "../models/RelUsuarioEvento";

// Valida el ID de la relacion entre usuario y evento
export const validateRelUsuarioEvento = async (req: Request, res: Response, next: NextFunction) => {
  await param('IdUsuario')
    .isInt().withMessage('Id no válido')
    .custom(value => value > 0).withMessage('Id no válido')
    .run(req);
  await param('IdEvento')
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


// Valida si el id de la relacion de usuario y evento ya existe
export const validateRelUsuarioEventoYaExiste = async (req: Request, res: Response, next: NextFunction) => {
  await body('IdUsuario')
    .custom(async (value) => {
      const relusuarioevento = await RelUsuarioEvento.findOne({
        where: { IdUsuario : value },
      });
      if (relusuarioevento) {
        throw new Error('Esta relacion de usuario ya está registrada');
      }
      return true;
    })
    .run(req);

  await body('IdEvento')
    .custom(async (value) => {
      const relusuarioevento = await RelUsuarioEvento.findOne({
        where: { IdEvento : value },
      });
      if (relusuarioevento) {
        throw new Error('Esta relacion de evento ya está registrada');
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

// Valida el cuerpo de la relacion
export const validateRelUsuarioEventoBody = async (req: Request, res: Response, next: NextFunction) => {
  await body('IdUsuario')
    .notEmpty().withMessage('El id de la relacion de usuario no puede estar en blanco')
    .run(req);

  await body('IdEvento')
    .notEmpty().withMessage('El id de la relacion de Evento no puede estar en blanco')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};