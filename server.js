/**
 * @const express - Guarda la libreria
 * @const app - Guarda la instancia del servidor
 */
const express = require('express');
const app = express();

/** 
 * Middleware para exponer la carpeta public
 */
app.use(express.static(__dirname + '/public'));

/** 
 * Configura el punto de entrada a la aplicacion
 */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

/** 
 * Lanza el servidor y escucha por puerto 5050
 */
app.listen(5050, () => {
  console.log('Server listening on http://localhost:5050');
});