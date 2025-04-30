import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";

export const validateConstanciaId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await param("id")
    .notEmpty().withMessage("El ID es obligatoorio")
    .isInt({ gt: 0 }).withMessage("El ID debe ser un número positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

export const validateConstanciaCreate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await body("ConstanciaHorasCert")
    .notEmpty().withMessage("Las horas certificadas son obligatorias")
    .isInt({ gt: 0 }).withMessage("Las horas certificadas deben ser un número positivo")
    .run(req);

  await body("ConstanciaEstado")
    .notEmpty().withMessage("El estado es obligatorio")
    .isIn(["Aprobado", "Pendiente"]).withMessage('El estado debe ser "Aprobado" o "Pendiente"')
    .run(req);

  await body("ConstanciaFecha")
    .notEmpty().withMessage("La fecha de constancia es obligatoria")
    .isISO8601().withMessage("La fecha debe estar en formato válido (YYYY-MM-DD)")
    .run(req);

  await body("IdUsuario")
    .notEmpty().withMessage("El ID del usuario es obligatorio")
    .isInt({ gt: 0 }).withMessage("El ID del usuario debe ser un número positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

export const validateConstanciaUpdate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await param("id")
    .notEmpty().withMessage("El ID es obligatorio")
    .isInt({ gt: 0 }).withMessage("El ID debe ser un número positivo")
    .run(req);

  await body("ConstanciaHorasCert")
    .optional()
    .isInt({ gt: 0 }).withMessage("Las horas certificadas deben ser un número positivo")
    .run(req);

  await body("ConstanciaEstado")
    .optional()
    .isIn(["Aprobado", "Pendiente"]).withMessage('El estado debe ser "Aprobado" o "Pendiente"')
    .run(req);

  await body("ConstanciaFecha")
    .optional()
    .isISO8601().withMessage("La fecha debe estar en formato válido (YYYY-MM-DD)")
    .run(req);

  await body("IdUsuario")
    .optional()
    .isInt({ gt: 0 }).withMessage("El ID del usuario debe ser un número positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};
