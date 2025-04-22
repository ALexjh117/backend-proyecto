import type { Request , Response } from "express";

export class AlquilerElementosControllers{
    static getAll =async (req:Request , res:Response) =>{
        console.log('Desde Get /api/ hola mundo 223232')
    }
}