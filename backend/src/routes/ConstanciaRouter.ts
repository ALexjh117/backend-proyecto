import { Router } from "express";
import { ConstanciaControllers } from "../controllers/ConstanciaController";
import { handleInputErrors } from "../middleware/validation";
import {
  validateConstanciaId,
  validateConstanciaCreate,
  validateConstanciaUpdate,
} from "../middleware/Constancia";

const router = Router();

router.get("/", ConstanciaControllers.getConstanciaAll);

router.get("/:id",
  validateConstanciaId,
  handleInputErrors,
  ConstanciaControllers.getConstanciaId
);

router.post(
  "/",
  validateConstanciaCreate,
  handleInputErrors,
  ConstanciaControllers.crearConstancia
);

router.put(
  "/:id",
  validateConstanciaUpdate,
  handleInputErrors,
  ConstanciaControllers.actualizarConstanciaId
);

router.delete(
  "/:id",
  validateConstanciaId,
  handleInputErrors,
  ConstanciaControllers.eliminarConstanciaId
);

export default router;
