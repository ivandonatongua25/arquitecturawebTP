const express = require('express')

const app = express()
const port = 3002

app.get('/h', (req, res) => {
  res.send('Hello World!')
});

app.get('/', (req, res) => {
    res.send('Hola ivan!')
  });

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto : ${port}`)
});