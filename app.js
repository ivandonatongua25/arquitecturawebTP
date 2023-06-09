const express = require('express')
const path = require('path');
const app = express()
const port = 3002
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./views/views.html'))
});

app.get('/hotel/:id', (req, res) =>
{
  res.sendFile(path.resolve('el hotel bueno'));
}
);

app.get('/huesped/:id', (req, res) =>{
  res.send('El huesped');
});

app.get('/huesped/', (req, res) =>{
  res.sendFile(path.resolve('./views/vista.html'));
})


//*****************por si hay algun error  **************************************/
app.get('*', (req, res) => {
    res.status(404).sendFile(path.resolve('./views/error.html'));
  });




//*****************LEVANTO SERVIDOR  **************************************/
app.listen(port, () => {
  console.log(`servidor corriendo en el puerto : ${port}`)
});