const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const routerApi = require('./src/routes');

/* Shift + Alt + F */
app.listen(port, () => console.log('Conect in the port', port));

/* Conexion con la BD */
mongoose 
.connect(process.env.MONGODB_STRING_CONNECT)
.then(() => console.log('Sucess connect with mongoDB'))
.catch((error)=> console.log(error));

/* respuestas en formato JSON */
app.use(express.json());
routerApi(app);
