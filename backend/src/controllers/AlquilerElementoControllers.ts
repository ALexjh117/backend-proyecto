import type { Request, Response } from "express";

export class AlquilerElementosControllers {
  static getAll = async (req: Request, res: Response) => {
    console.log("Desde  get /api/ hola aquiler");
  };
  static crearAlquilerElementos = async (req: Request, res: Response) => {
    console.log("Desde post /api/ hola alquiler");
  };

  static actualizarAlquilerElementos = async (req: Request, res: Response) => {
    console.log("Desde put /api/ hola alquiler");
  };

  static eliminarAlquilerElementos = async (req: Request, res: Response) => {
    console.log("Desde delete/api/ hola alquiler");
  };
}






