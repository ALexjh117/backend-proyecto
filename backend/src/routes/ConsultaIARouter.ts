
import { Router } from 'express';


import { ConsultaIAControllers } from '../controllers/ConsultaIAController'



const router = Router();



router.get('/', ConsultaIAControllers.getAll);
router.post('/', ConsultaIAControllers.crearConsultaIA)
router.put('/', ConsultaIAControllers.actualizarConsultaIA)
router.delete('/', ConsultaIAControllers.eliminarConsultaIA)



export default router

