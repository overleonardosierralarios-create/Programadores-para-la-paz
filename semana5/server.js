const express = require('express');
const app = express();

<<<<<<< HEAD
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
=======
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
>>>>>>> 600afacbdb395dd94784f55e4b021ec5434f428a
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
