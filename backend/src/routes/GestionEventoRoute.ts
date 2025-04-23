import { Router } from "express";

import { GestionEventoController } from "../controllers/GestionEventoController";

const GestionEventoRoute  = Router()

GestionEventoRoute.get("/api/gestionevento/get", GestionEventoController.getAll)
GestionEventoRoute.get("/api/gestionevento/post", GestionEventoController.crearGestioEvento)
GestionEventoRoute.get("/api/gestionevento/put", GestionEventoController.actualizarGestionEvento)
GestionEventoRoute.get("/api/gestionevento/delete", GestionEventoController.eliminarGestionEvento)

export default GestionEventoRoute
