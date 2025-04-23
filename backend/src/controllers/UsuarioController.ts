import type { Request, Response } from "express";

export class UsuarioController {
    static getAll = async (req : Request, res : Response) => {
        console.log("Desde api/usuario/get metodo Get de usuario")
    }

    static crearUsuario = async (req : Request, res : Response) => {
        console.log("Desde api/usuario/post metodo Post de usuario")
    }

    static actualizarUsuario = async (req: Request, res : Response) =>{
        console.log("Desde api/usuario/put metodo put de usuario")
    }

    static borrarUsuario = async (req : Request, res : Response ) => {
        console.log("Desde api/usuario/delete metodo Delete de usuario")
    }
}