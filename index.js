const express = require('express');
const cors = require('cors');
const path = require('path'); //path es un paquete de node

const { dbConnection } = require('./database/config');
require('dotenv').config(); // donde estan nuestras variables de entorno



//Crear el servidor/aplicacion de express
const app = express();

//Conexion a la base de datos
dbConnection()

//Directorio publico
app.use(express.static('public'))

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Manejar demas rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})