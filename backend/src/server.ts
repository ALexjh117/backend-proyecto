import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import { db } from './config/db';
import ActividadRouter from './routes/ActividadRouter'
import AlquilerElementosRouter from './routes/AlquilerElementosRouter';

import UsuarioRoute from './routes/UsuarioRoute';
import GestionEventoRoute from './routes/GestionEventoRoute';
import RelusuarioFeedbackRouter from './routes/RelusuarioFeedbackRouter';
import RolusuarioRouter from './routes/RolusuarioRouter'
import ConstanciaRouter from './routes/ConstanciaRouter';
import ConsultaIARouter from './routes/ConsultaIARouter';




async function connectDB() {
    try {
        await db.authenticate(); 
        console.log(colors.blue.bold('Conexión exitosa a la Base de datos hecho por Alex'));

      
        try {
            const [results, metadata] = await db.query('SELECT * FROM Usuario LIMIT 5');
            //console.log('Datos de ejemplo:', results);
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
        }
    } catch (error) {
        console.error('Error al conectar a la BD:', error);
        console.log(colors.red.bold('Falló la conexión a la BD'));
    }
}

connectDB();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/actividad', ActividadRouter);
app.use('/api/alquilerelementos', AlquilerElementosRouter);

app.use("/api/usuario", UsuarioRoute)
app.use("/api/gestionevento", GestionEventoRoute)



app.use('/api/relusuariofeedback', RelusuarioFeedbackRouter)
app.use('/api/rolusuario', RolusuarioRouter)


app.use('/api/constancia', ConstanciaRouter)
app.use('/api/consultaia', ConsultaIARouter)


export default app;
