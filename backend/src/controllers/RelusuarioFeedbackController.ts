import { Request, Response } from "express";

export class RelusuarioFeedbackController{
    static getAll = async (req: Request, res: Response) =>{
        console.log(`Desde Get api/RelUsuarios_Feedback`)
    };
    static CrearRelusuarios_Feedback = async (req: Request, res: Response) =>{
        console.log(`Desde Post api/RelUsuarios_Feedback`)
    };
    static ActualizarRelusuarios_Feedback = async (req: Request, res: Response) =>{
        console.log(`Desde Put api/RelUsuarios_Feedback`)
    };
    static EliminarRelusuarios_Feedback = async (req: Request, res: Response) =>{
        console.log(`Desde Delete api/RelUsuarios_Feedback`)
    };
}