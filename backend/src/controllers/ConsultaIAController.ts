import type { Request , Response } from "express";

export class ConsultaIAControllers{
    static getAll =async (req:Request , res:Response) =>{
        console.log('Desde get /api/ hola  desde Chat IA')
    }
    static crearConsultaIA =async (req:Request , res:Response) =>{
        console.log('Desde post /api/ hola desde Chat IA')
        }
        static actualizarConsultaIA=async (req:Request , res:Response) =>{
            console.log('Desde put /api/ hola desde Chat IA')
        }
    
    
        static eliminarConsultaIA=async (req:Request , res:Response) =>{
        console.log('Desde delete /api/ hola desde Chat IA')
    }
    
    
    }

    