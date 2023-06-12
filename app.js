const express = require('express')
const path = require('path');
const app = express()
const port = 3002
app.use(express.static(path.join(__dirname, 'public')))
const mainRouter = require('./routers/router')
app.get('/', mainRouter);


//*****************por si hay algun error  **************************************/
app.get('*', (req, res) => {
    res.status(404).sendFile(path.resolve('./views/error.html'));
  });




//*****************LEVANTO SERVIDOR  **************************************/
app.listen(port, () => {
  console.log(`servidor corriendo en el puerto : ${port}`)
});