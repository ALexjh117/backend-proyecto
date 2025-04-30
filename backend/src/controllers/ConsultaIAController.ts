import type { Request, Response } from "express";
import { ConsultaIA } from "../models/ConsultaIA"; 

export class ConsultaIAController {
  static getConsultaIAAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const consultas = await ConsultaIA.findAll();
      res.status(200).json(consultas);
    } catch (error) {
      console.error("Error al obtener las consultas:", error);
      res.status(500).json({ error: "Hubo un error al obtener las consultas" });
    }
  };

  static getConsultaIAById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const consulta = await ConsultaIA.findByPk(id);

      if (!consulta) {
        res.status(404).json({ error: "Consulta no encontrada" });
        return;
      }

      res.status(200).json(consulta);
    } catch (error) {
      console.error("Error al buscar la consulta:", error);
      res.status(500).json({ error: "Hubo un error al buscar la consulta" });
    }
  };

  static crearConsultaIA = async (req: Request, res: Response): Promise<void> => {
    try {
      const { Pregunta, Respuesta, Fecha, Descripcion, IdUsuario } = req.body;

      const nuevaConsulta = await ConsultaIA.create({
        Pregunta,
        Respuesta,
        Fecha,
        Descripcion,
        IdUsuario
      });

      res.status(201).json({
        message: "Consulta de IA creada correctamente",
        consulta: nuevaConsulta,
      });
    } catch (error) {
      console.error("Error al crear la consulta:", error);
      res.status(500).json({ error: "Hubo un error al crear la consulta de IA" });
    }
  };

  static actualizarConsultaIA = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const consulta = await ConsultaIA.findByPk(id);

      if (!consulta) {
        res.status(404).json({ error: "Consulta no encontrada" });
        return;
      }

      await consulta.update(req.body);

      res.status(200).json({
        message: "Consulta de IA actualizada correctamente",
        consulta,
      });
    } catch (error) {
      console.error("Error al actualizar la consulta:", error);
      res.status(500).json({ error: "Error al actualizar la consulta de IA" });
    }
  };

  static eliminarConsultaIA = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const consulta = await ConsultaIA.findByPk(id);

      if (!consulta) {
        res.status(404).json({ error: "Consulta no encontrada" });
        return;
      }

      await consulta.destroy();

      res.status(200).json({
        message: `Consulta de IA con ID ${id} eliminada correctamente`,
      });
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
      res.status(500).json({ error: "Error al eliminar la consulta de IA" });
    }
  };
}
