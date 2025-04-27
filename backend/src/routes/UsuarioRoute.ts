import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { handleInputErrors } from "../middleware/validation";
import { validateUsuarioBody, validateUsuarioNoExiste, validateUsuarioId } from "../middleware/Usuario";

const UsuarioRoute = Router()


UsuarioRoute.get("/", handleInputErrors, UsuarioController.getAll)

UsuarioRoute.get("/:id", 
    validateUsuarioId,
    handleInputErrors,
    UsuarioController.getUsuarioId)

UsuarioRoute.post("/", 
    validateUsuarioNoExiste,
    validateUsuarioBody,
    handleInputErrors,
    UsuarioController.crearUsuario)


UsuarioRoute.put("/:id", 
    validateUsuarioId,
    validateUsuarioNoExiste, 
    validateUsuarioBody,
    UsuarioController.actualizarUsuarioId)

UsuarioRoute.delete("/:id", 
    validateUsuarioId,
    handleInputErrors,
    UsuarioController.borrarUsuarioId)

export default UsuarioRoute
