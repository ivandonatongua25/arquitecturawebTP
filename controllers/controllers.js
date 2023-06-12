const path = require('path');

maincontroler ={
    index : (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/vista.html'));
    },
    about : (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/views.html'));
    },
    errore : (req, res) => {
        res.status(404).sendFile(path.join(__dirname,'../views/error.html'));
    }

}

module.exports = maincontroler;