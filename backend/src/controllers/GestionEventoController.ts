import type { Request, Response } from "express";

export class GestionEventoController {
    static getAll = async (req : Request, res : Response) => {
        console.log("Desde api/gestionevento/get metodo get")
    }

    static crearGestioEvento = async (req : Request, res : Response) => {
        console.log("Desde api/gestionevento/post metodo post")
    }

    static actualizarGestionEvento = async (req : Request, res : Response) => {
        console.log("Desde api/gestionevento/put metodo put")
    }

    static eliminarGestionEvento = async (req : Request, res : Response) => {
        console.log("Desde api/gestionevento/delete metodo delete")
    }

}