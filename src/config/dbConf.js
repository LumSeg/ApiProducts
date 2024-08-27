require("dotenv").config();
const mongoose = require("mongoose");

const dbConf = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('Conexión a MongoDB Atlas exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1);
    }
};

module.exports = dbConf;




