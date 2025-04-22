import type { Request, Response } from "express";

export class AsistenciaControllers {
  static getAll = async (req: Request, res: Response) => {
    console.log("Desde get /api/ hola desde asistencia");
  };

  static crearAsistencia = async (req: Request, res: Response) => {
    console.log("Desde post /api/ hola desde asistencia");
  };
  static actualizarAsistencia = async (req: Request, res: Response) => {
    console.log("Desde put /api/ hola desde asistencia");
  };

  static eliminarAsistencia = async (req: Request, res: Response) => {
    console.log("Desde delete /api/ hola desde asistencia");
  };
}
