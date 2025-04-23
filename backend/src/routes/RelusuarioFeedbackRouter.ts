import { Router } from "express";
import { RelusuarioFeedbackController } from "../controllers/RelusuarioFeedbackController";

const router = Router();

router.get('/', RelusuarioFeedbackController.getAll);
router.post('/', RelusuarioFeedbackController.CrearRelusuarios_Feedback);
router.put('/', RelusuarioFeedbackController.ActualizarRelusuarios_Feedback);
router.delete('/', RelusuarioFeedbackController.EliminarRelusuarios_Feedback);

export default router;