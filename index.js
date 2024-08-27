require('dotenv').config();
const app = require("./src/server"); 
const dbConf = require("./src/config/dbConf"); 

// Configuración de conexión a la base de datos
dbConf().then(() => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
}).catch((error) => {
    console.error('Error al iniciar el servidor:', error);
});

