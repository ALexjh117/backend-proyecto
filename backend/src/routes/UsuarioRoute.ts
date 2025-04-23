import { Router } from "express";

import { UsuarioController } from "../controllers/UsuarioController";

const UsuarioRoute = Router()


UsuarioRoute.get("/api/usuario/get/", UsuarioController.getAll)
UsuarioRoute.post("/api/usuario/post/", UsuarioController.crearUsuario)
UsuarioRoute.put("/api/usuario/put/", UsuarioController.actualizarUsuario)
UsuarioRoute.delete("/api/usuario/delete/", UsuarioController.borrarUsuario)

export default UsuarioRoute
