import type{ Request, Response } from "express";
import { AlquilerElementos } from "../models/AlquilerElementos";

export class AlquilerElementosControllers {
    static getAlquilerElementosAll = async (req: Request, res: Response) => {
        try {
            console.log('Desde GET /api/AlquilerElementos');
            
            // Obtener todas las actividades ordenadas por `createdAt`
            const alquiler = await AlquilerElementos.findAll({
                order: [
                    ['createdAt', 'ASC'], // Ordenar por la fecha de creación
                ],
            });

            res.json(alquiler); // Responder con el resultado de las actividades
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Hubo un error' });
        }
    };

    static getIdAlquiler = async (req: Request, res: Response) => {
        try {
            const { IdAlquiler } = req.params;
            const alquiler = await AlquilerElementos.findByPk(IdAlquiler);
            if (!alquiler) {
                const error = new Error('Alquiler no encontrado');
                res.status(404).json({ error: error.message });
                return;
            }
            res.json(alquiler);
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error al obtener el alquiler' });
        }
    };

    static crearAlquiler = async (req: Request, res: Response) => {
        try {
            const alquiler = new AlquilerElementos(req.body);
            await alquiler.save();
            res.status(201).json('Alquiler creado exitosamente');
        } catch (error) {
            console.error('Error al crear alquiler:', error);
            res.status(500).json({ error: 'Hubo un error al crear el alquiler' });
        }
    };

    static actualizarIdAlquiler = async (req: Request, res: Response) => {
        try {
            const { IdAlquiler } = req.params;
            const alquiler = await AlquilerElementos.findByPk(IdAlquiler);
            if (!alquiler) {
                const error = new Error('Alquiler no encontrado');
                 res.status(404).json({ error: error.message });
                 return;
            }
            await alquiler.update(req.body);
            res.json('Alquiler actualizado correctamente');
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error al actualizar el alquiler' });
        }
    };

    static eliminarIdAlquiler = async (req: Request, res: Response) => {
        try {
            const { IdAlquiler } = req.params;
            const alquiler = await AlquilerElementos.findByPk(IdAlquiler);
            if (!alquiler) {
                const error = new Error('Alquiler no encontrado');
                res.status(404).json({ error: error.message });
                return;
            }
            await alquiler.destroy();
            res.json('Alquiler eliminado correctamente');
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error al eliminar el alquiler' });
        }
    };
}
