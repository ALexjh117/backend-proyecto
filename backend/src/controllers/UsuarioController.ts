import type { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

export class UsuarioController {
    static getAll = async (req : Request, res : Response) => {
        try {
            console.log("Desde api/usuario/get metodo Get de usuario")
            const usuarios = await Usuario.findAll({
                order : [
                    ["createdAt", "ASC"]
                ],
            })
            res.json(usuarios)
        }
        catch (error) {
            res.status(500).json({error: "Hubo un error"})
        }
        
    }

    static getUsuarioId = async (req: Request, res : Response) => {
        try {
            //console.log("Desde api/usuario/:id metodo Get por Id de usuario")
            const { id } = req.params
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                res.status(404).json({ error: "Usuario no encontrado." })
                return 
            }
            res.json(usuario)
        }
        catch (error) {
            res.status(500).json({error : "Hubo un error"})
        }
    }

    static crearUsuario = async (req : Request, res : Response) => {
        try {
            const usuario = new Usuario(req.body)
            await usuario.save()
            res.status(201).json("Usuario creado correctamente")
        }
        catch (error) {
            res.status(500).json( {error : "Error al crear usuario."})
        }
    }

    static actualizarUsuarioId = async (req: Request, res : Response) =>{
        try {
            const {id} = req.params
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                res.status(404).json({error: "Usuario no encontrado."})
            }

            await usuario?.update(req.body)
            res.json("Usuario actualizado exitosamente.")
        }
        catch (error) {
            res.status(500).json({error : "Error al actulizar usuario."})
        }
    }

    static borrarUsuarioId = async (req : Request, res : Response ) => {
        try {
            const {id} = req.params
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                res.status(404).json({error: "Usuario no encontrado."})
                return
            }

            await usuario?.destroy()
            res.json("Usuario eliminado exitosamente.")
        }
        catch (error) {
            res.status(500).json({error : "Error al actulizar usuario."})
        }
    }
}