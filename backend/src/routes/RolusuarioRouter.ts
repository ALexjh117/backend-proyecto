import { Router } from "express";
import { RolusuarioController } from "../controllers/RolusuarioController";

const router = Router()

router.get('/', RolusuarioController.getAll);
router.post('/', RolusuarioController.CreateUser);
router.put('/', RolusuarioController.UpdateUser);
router.delete('/', RolusuarioController.DeleteUser);

export default router;