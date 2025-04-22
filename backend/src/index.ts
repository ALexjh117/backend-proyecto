import server from './server';
import colors from 'colors'; 
import {db} from './config/db'

const port = process.env.PORT || 3000;


async function startServer() {
    try {
        await db.authenticate(); 
        console.log(colors.blue.bold('Conexión exitosa a la Base de datos echo por Alex'));

        await db.sync(); 
        console.log(colors.blue.bold('Base de datos y mdeolos sincronizados.'));

        server.listen(port, () =>{
            console.log(`✅ El servidor se esta escuchando en el puerto, Busca en http://localhost:${port}`)
        })

      
       
    } catch (error) {
        /* console.error('Error durante la inicialización:', error); */
        console.log('error al conectar')
      
    }
}

startServer();