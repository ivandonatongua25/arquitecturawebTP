const express = require('express')

const app = express()
const port = 3002

app.get('/hotel/', (req, res) => {
  res.send('Estos son los hoteles disponibles!')
});

app.get('/hotel/:id', (req, res) =>
{
  res.send('el hotel bueno');
}
);

app.get('/huesped/:id', (req, res) =>{
  res.send('El huesped');
});

app.get('/huesped/', (req, res) =>{
  res.send('Lista de huespedes')
})

app.get('/', (req, res) => {
    res.send('Hola ivan!')
  });

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto : ${port}`)
});