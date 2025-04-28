import { Request, Response } from "express";
import { RelUsuarioFeedback } from "../models/RelUsuarioFeedback";

export class RelusuarioFeedbackController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const relaciones = await RelUsuarioFeedback.findAll();
            res.json(relaciones);
        } catch (error) {
            //console.error(error);
            res.status(500).json({ error: 'hubo un error' });
        }
    };

    static getRelUsuarioFeedbakcId = async (req: Request, res: Response) => {
        try{
            const { IdUsuario, IdFeedback } = req.params;
            const relacion = await RelUsuarioFeedback.findOne({
                where: { IdUsuario, IdFeedback },
            });

            if (!relacion) {
                const error = new Error('Relación no encontrada');
                res.status(404).json({error: error.message });
                return
            }

            res.json(relacion);
        }
        catch (error) {
            //console.error(error);
            res.status(500).json({ error: 'Ocurrio un error' });
        }
    }

    static CrearRelusuarios_Feedback = async (req: Request, res: Response) => {
        try {
            const { IdUsuario, IdFeedback, FechaRelUsuaFeed } = req.body;
            const nuevaRelacion = await RelUsuarioFeedback.create({ IdUsuario, IdFeedback, FechaRelUsuaFeed });
            res.status(201).json(nuevaRelacion);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'ocurrio un error' });
        }
    };

    static ActualizarRelusuarios_Feedback = async (req: Request, res: Response) => {
        try {
            const { IdUsuario, IdFeedback, FechaRelUsuaFeed } = req.body;

            const relacion = await RelUsuarioFeedback.findOne({
                where: { IdUsuario, IdFeedback },
            });

            if (!relacion) {
                const error = new Error('relacion no encontrada');
                res.status(404).json({ error: error.message });
                return
            }

            await relacion.update({ FechaRelUsuaFeed });
            res.json(relacion);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'ocurrio un error' });
        }
    };

    static EliminarRelusuarios_Feedback = async (req: Request, res: Response) => {
        try {
            const { IdUsuario, IdFeedback } = req.body;

            const relacion = await RelUsuarioFeedback.findOne({
                where: { IdUsuario, IdFeedback },
            });

            if (!relacion) {
                const error = new Error('Relación no encontrada');
                res.status(404).json({  error: error.message });
                return
            }

            await relacion.destroy();
            res.json('Relación eliminada exitosamente');
        } catch (error) {
            //console.error(error);
            res.status(500).json({ error: 'Ocurrio un error' });
        }
    };
}
