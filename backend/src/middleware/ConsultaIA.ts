import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";

export const validateConsultaIAId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await param("id")
    .notEmpty().withMessage("El ID es obligatorio")
    .isInt({ gt: 0 }).withMessage("El ID debe ser un número entero positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

export const validateConsultaIACreate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await body("Pregunta")
    .notEmpty().withMessage("La pregunta es obligatoria")
    .isString().withMessage("La pregunta debe ser un texto")
    .isLength({ min: 5 }).withMessage("La pregunta debe tener al menos 5 caracteres")
    .run(req);

  await body("Respuesta")
    .notEmpty().withMessage("La respuesta es obligatoria")
    .isString().withMessage("La respuesta debe ser un texto")
    .run(req);

  await body("Fecha")
    .notEmpty().withMessage("La fecha es obligatoria")
    .isISO8601().withMessage("La fecha debe estar en formato válido (YYYY-MM-DD)")
    .run(req);

  await body("Descripcion")
    .optional()
    .isString().withMessage("La descripción debe ser un texto")
    .run(req);

  await body("IdUsuario")
    .notEmpty().withMessage("El ID del usuario es obligatorio")
    .isInt({ gt: 0 }).withMessage("El ID del usuario debe ser un número entero positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};

export const validateConsultaIAUpdate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await param("id")
    .notEmpty().withMessage("El ID es obligatorio")
    .isInt({ gt: 0 }).withMessage("El ID debe ser un número entero positivo")
    .run(req);

  await body("Pregunta")
    .optional()
    .isString().withMessage("La pregunta debe ser un texto")
    .isLength({ min: 5 }).withMessage("La pregunta debe tener al menos 5 caracteres")
    .run(req);

  await body("Respuesta")
    .optional()
    .isString().withMessage("La respuesta debe ser un texto")
    .run(req);

  await body("Fecha")
    .optional()
    .isISO8601().withMessage("La fecha debe estar en formato válido (YYYY-MM-DD)")
    .run(req);

  await body("Descripcion")
    .optional()
    .isString().withMessage("La descripción debe ser un texto")
    .run(req);

  await body("IdUsuario")
    .optional()
    .isInt({ gt: 0 }).withMessage("El ID del usuario debe ser un número entero positivo")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};
