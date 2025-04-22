import type { Request , Response } from "express";
import { Actividad } from "../models/Actividad";
import { error } from "console";

export class ActividadControllers{
    static getActividadAll =async (req:Request , res:Response) =>{
        console.log('Desde GET /api/actividad')
    }

    static getIdActividad=async (req:Request , res:Response) =>{
        console.log('Desde Get:id/api/actividad/id')
    }

    static crearActividad = async (req: Request, res: Response) => {
        try {
            const actividad = new Actividad(req.body);
            await actividad.save();
            res.status(201).json('actividad creada exitosamente');
        } catch (error) {
            console.error('Error al crear actividad:', error); // <-- Aquí
            res.status(500).json({ error: 'hubo error' });
        }
    }
    

    static actualizarIdActividad =async (req:Request , res:Response) =>{
        console.log('Desde put /api/hola mundo 2022')
    }

    static eliminarIdActividad =async (req:Request , res:Response) =>{
    console.log('Desde desde delete /api/hola mundo 2022')
}
}





