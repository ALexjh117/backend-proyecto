import type { Request, Response } from "express";

export class RelUsuarioEventoControllers {
  static getAll = async (req: Request, res: Response) => {
    console.log("Desde  get /api/ hola relacion de evento y usuario");
  };
  static crearRelUsuarioEvento = async (req: Request, res: Response) => {
    console.log("Desde post /api/ hola relacion de evento y usuario");
  };

  static actualizarRelUsuarioEvento = async (req: Request, res: Response) => {
    console.log("Desde put /api/ hola relacion de evento y usuario");
  };

  static eliminarRelUsuarioEvento = async (req: Request, res: Response) => {
    console.log("Desde delete/api/ hola relacion de evento y usuario");
  };
}
