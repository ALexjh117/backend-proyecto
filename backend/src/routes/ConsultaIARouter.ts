import { Router } from "express";
import { ConsultaIAController } from "../controllers/ConsultaIAController";
import { handleInputErrors } from "../middleware/validation";
import {
  validateConsultaIAId,
  validateConsultaIACreate,
  validateConsultaIAUpdate,
} from "../middleware/ConsultaIA";

const router = Router();

router.get("/", ConsultaIAController.getConsultaIAAll);

router.get(
  "/:id",
  validateConsultaIAId,
  handleInputErrors,
  ConsultaIAController.getConsultaIAById
);

router.post(
  "/",
  validateConsultaIACreate,
  handleInputErrors,
  ConsultaIAController.crearConsultaIA
);

router.put(
  "/:id",
  validateConsultaIAUpdate,
  handleInputErrors,
  ConsultaIAController.actualizarConsultaIA
);

router.delete(
  "/:id",
  validateConsultaIAId,
  handleInputErrors,
  ConsultaIAController.eliminarConsultaIA
);

export default router;
