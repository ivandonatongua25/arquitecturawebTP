const express   = require('express');
const router = express.Router();
const maincontroler = require('../controllers/controllers');


router.get('/',maincontroler.index);
router.get('/about',maincontroler.about);
router.get('*', maincontroler.errore);




//router.get('/hotel/:id', (req, res) =>
//{
  //res.sendFile(path.resolve('el hotel bueno'));
//}
//);

//app.get('/huesped/:id', (req, res) =>{
//  res.send('El huesped');
//});

//app.get('/huesped/', (req, res) =>{
//  res.sendFile(path.resolve('./views/vista.html'));
//})






module.exports = router;
