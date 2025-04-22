import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import { db } from './config/db';
import ActividadRouter from './routes/ActividadRouter'
import AlquilerElementosRouter from './routes/AlquilerElementosRouter';
import RelusuarioFeedbackRouter from './routes/RelusuarioFeedbackRouter';
import RolusuarioRouter from './routes/RolusuarioRouter'


async function connectDB() {
    try {
        await db.authenticate(); 
        console.log(colors.blue.bold('Conexión exitosa a la Base de datos echo por Alex'));

      
        try {
            const [results, metadata] = await db.query('SELECT * FROM evento  ');
            console.log('Datos de ejemplo:', results);
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
app.use('/api/relusuariofeedback', RelusuarioFeedbackRouter)
app.use('/api/rolusuario', RolusuarioRouter)



export default app;
