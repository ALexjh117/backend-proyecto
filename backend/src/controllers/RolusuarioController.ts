import { Request, Response } from "express";

export class RolusuarioController{
    static getAll = async (req: Request, res: Response) =>{
        console.log('Desde el Get api/RolUsuarios')
    };

    static CreateUser = async (req: Request, res: Response) =>{
        console.log('Desde el Post api/RolUsuarios')
    };

    static UpdateUser = async (req: Request, res: Response)=>{
        console.log('Desde el Put api/Rolusuarios')
    };

    static DeleteUser = async (req:Request, res:Response) =>{
        console.log('Desde el Delete api/RolUsuarios')
    };
}