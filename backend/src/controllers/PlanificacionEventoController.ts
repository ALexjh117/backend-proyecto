import type { Request , Response } from "express";
import { PlanificacionEvento } from "../models/PlanificacionEvento";
import { error } from "console";

export class PlanificacionEventoControllers {
    static getPlanificacionEventoAll = async (req: Request, res: Response) => {
      try {
        console.log('Desde GET /api/planificacionevento');
        
        // Obtener todas las planificaciones de evento ordenadas por `createdAt`
        const planificacionevento = await PlanificacionEvento.findAll({
          order: [
            ['createdAt', 'ASC'], // Ordenar por la fecha de creación
          ],
         
        });
  
        res.json(planificacionevento); // Responder con el resultado de la planificacion de eventos
      } catch (error) {
        console.error(error); // logear el error para depurar
        res.status(500).json({ error: 'Hubo un error' }); // Responder con un error genérico
      }
    };
  
 
static getIdPlanificarE=async (req:Request , res:Response) =>{


    try{
        const {IdPlanificarE} =req.params
        const planificacionevento =await PlanificacionEvento.findByPk(IdPlanificarE)
        if(!planificacionevento) {
            const error = new Error('Planificacion de Evento no encontrada')
            res.status(404).json({error:error.message})
            return;
        }
        res.json(planificacionevento)
    }   catch (error){
        res.status(500).json({error: 'hubo un error'})
    }
        
}

    static crearPlanificacionEvento = async (req: Request, res: Response) => {
        try {
            const planificacionevento = new PlanificacionEvento(req.body);
            await planificacionevento.save();
            res.status(201).json('Planificacion de Evento creada exitosamente');
        } catch (error) {
            console.error('Error al crear Planificacion de Evento:', error); 
            res.status(500).json({ error: 'hubo error' });
        }
    }
    

    static actualizarIdPlanificarE =async (req:Request , res:Response) =>{
        try{
            const {IdPlanificarE} =req.params
            const planificacionevento =await PlanificacionEvento.findByPk(IdPlanificarE)
            if(!planificacionevento) {
                const error = new Error('Planificacion de Evento no encontrada')
                res.status(404).json({error:error.message})
                return;
            }
            await planificacionevento.update(req.body)
            res.json('Planificacion de Evento actualizado correctamente')
        } catch (error){
            res.status(500).json({error: 'hubo un error'})
        }
            
    }
    

    static eliminarIdPlanificarE =async (req:Request , res:Response) =>{
        try{
            const {IdPlanificarE} =req.params
            const planificacionevento =await PlanificacionEvento.findByPk(IdPlanificarE)
            if(!planificacionevento) {
                const error = new Error('Planificacion de Evento no encontrado')
                res.status(404).json({error:error.message})
                return;
            }
            //Escribir los cambios del body
            await planificacionevento.destroy(req.body)
            res.json('Planificacion De Evento eliminado correctamente')
        } catch (error){
            //console.log(error)
            res.status(500).json({error: 'hubo un error'})
        }
            
    }
    



}