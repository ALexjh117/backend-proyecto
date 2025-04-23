import server from './server';
import colors from 'colors'; 
import { db } from './config/db';

const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await db.authenticate(); 
        console.log(colors.blue.bold('Conexión exitosa a la Base de datos'));

        // Sincroniza la base de datos y crea las columnas 'createdAt' y 'updatedAt'
        await db.sync({ alter: true }); 
        console.log(colors.blue.bold('Base de datos y modelos sincronizados.'));


        server.listen(port, () =>{
            console.log(`✅ El servidor se esta escuchando en el puerto, Busca en http://localhost:${port}`)
        })


    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();
