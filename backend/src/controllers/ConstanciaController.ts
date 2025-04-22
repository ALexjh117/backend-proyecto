import type { Request , Response } from "express";

export class ConnstanciaController{
    static getAll =async (req:Request , res:Response) =>{
        console.log('Desde get /api/ hola  desde constancia')
    }
    static crearConstancia =async (req:Request , res:Response) =>{
        console.log('Desde post /api/ hola desde Constancia')
        }
        static actualizarConstancia =async (req:Request , res:Response) =>{
            console.log('Desde put /api/ hola desde Constancia')
        }
    
    
        static eliminarConstancia =async (req:Request , res:Response) =>{
        console.log('Desde delete /api/ hola desde Constancia')
    }
    
    
    }