import type { Request, Response } from "express";
import { Constancia } from "../models/Constancia";

export class ConstanciaControllers {
  static getConstanciaAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const constancias = await Constancia.findAll();
      res.status(200).json(constancias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener las constancias" });
    }
  };

  static getConstanciaId = async (req: Request, res: Response): Promise<void> => {
    try {
      const constancia = await Constancia.findByPk(req.params.id);
      if (constancia) {
        res.status(200).json(constancia);
      } else {
        res.status(404).json({ error: "Constancia no encontrada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al buscar la constancia" });
    }
  };

  static crearConstancia = async (req: Request, res: Response): Promise<void> => {
    try {
      const { ConstanciaHorasCert, ConstanciaEstado, ConstanciaFecha, IdUsuario } = req.body;

      const nuevaConstancia = await Constancia.create({
        ConstanciaHorasCert,
        ConstanciaEstado,
        ConstanciaFecha,
        IdUsuario,
      });

      res.status(201).json({
        message: "Constancia creada correctamente",
        constancia: nuevaConstancia,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear la constancia" });
    }
  };

  static actualizarConstanciaId = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const constancia = await Constancia.findByPk(id);
      if (!constancia) {
        res.status(404).json({ error: "Constancia no encontrada" });
        return;
      }

      await constancia.update(req.body);

      res.status(200).json({
        message: "Constancia actualizada correctamente",
        constancia,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar la constancia" });
    }
  };

  static eliminarConstanciaId = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const constancia = await Constancia.findByPk(id);
      if (!constancia) {
        res.status(404).json({ error: "Constancia no encontrada" });
        return;
      }

      await constancia.destroy();

      res.status(200).json({
        message: `Constancia con ID ${id} eliminada correctamente`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar la constancia" });
    }
  };
}
