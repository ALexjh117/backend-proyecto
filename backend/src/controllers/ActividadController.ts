import type { Request , Response } from "express";
import { Actividad } from "../models/Actividad";
import { error } from "console";

export class ActividadControllers {
    static getActividadAll = async (req: Request, res: Response) => {
      try {
        console.log('Desde GET /api/actividad');
        
        // Obtener todas las actividades ordenadas por `createdAt`
        const actividad = await Actividad.findAll({
          order: [
            ['createdAt', 'ASC'], // Ordenar por la fecha de creación
          ],
          // Si quieres filtrar por algún parámetro de búsqueda, puedes hacerlo aquí.
          // Ejemplo de filtro (si recibes un parámetro `nombre` en la consulta):
          // where: {
          //   NombreActi: req.query.nombre || '',
          // },
        });
  
        res.json(actividad); // Responder con el resultado de las actividades
      } catch (error) {
        console.error(error); // Es buena idea logear el error para depurar
        res.status(500).json({ error: 'Hubo un error' }); // Responder con un error genérico
      }
    };
  
 
static getIdActividad=async (req:Request , res:Response) =>{


    try{
        const {IdActividad} =req.params
        const actividad =await Actividad.findByPk(IdActividad)
        if(!actividad) {
            const error = new Error('Actividad no encontrada')
            res.status(404).json({error:error.message})
            return;
        }
        res.json(actividad)
    }   catch (error){
        res.status(500).json({error: 'hubo un error'})
    }
        
}

    static crearActividad = async (req: Request, res: Response) => {
        try {
            const actividad = new Actividad(req.body);
            await actividad.save();
            res.status(201).json('actividad creada exitosamente');
        } catch (error) {
            console.error('Error al crear actividad:', error); 
            res.status(500).json({ error: 'hubo error' });
        }
    }
    

    static actualizarIdActividad =async (req:Request , res:Response) =>{
        try{
            const {IdActividad} =req.params
            const actividad =await Actividad.findByPk(IdActividad)
            if(!actividad) {
                const error = new Error('Actividad no encontrada')
                res.status(404).json({error:error.message})
                return;
            }
            await actividad.update(req.body)
            res.json('actividad actualizada correctamente')
        } catch (error){
            res.status(500).json({error: 'hubo un error'})
        }
            
    }
    

    static eliminarIdActividad =async (req:Request , res:Response) =>{
        try{
            const {IdActividad} =req.params
            const actividad =await Actividad.findByPk(IdActividad)
            if(!actividad) {
                const error = new Error('Actividad no encontrada')
                res.status(404).json({error:error.message})
                return;
            }
            //Escribir los cambios del body
            await actividad.destroy(req.body)
            res.json('actividad eliminada correctamente')
        } catch (error){
            //console.log(error)
            res.status(500).json({error: 'hubo un error'})
        }
            
    }
    



}





