const express = require('express');
const mongoose = require('mongoose')
const WilderController = require("./controllers/Wilder");
const app = express();  

//! Connexion - Database
mongoose
//?On se connecte et indique quelle DB utiliser, celle-ci sera crée au moment du son premier appel 
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
    })
    .then( _=> console.log('Connected to database'))
    .catch( err => console.log(err));
    
//! Middleware
app.use(express.urlencoded({

    extended: true
}));
app.use(express.json());

//! Routes

//? Méthode express

//! Anciennes méthodes (utilisation de then()), fonctionnelles
// app.post("/api/wilder/create", WilderController.oldMethods.oldCreate);
// app.get("/api/wilder/read", WilderController.oldMethods.oldRead);
// app.put("/api/wilder/update", WilderController.oldMethods.oldUpdate);
// app.delete("/api/wilder/delete", WilderController.oldMethods.oldDelete);

//! Nouvelles méthodes (utilisation de async / await), 
app.post("/api/wilder/create", WilderController.newMethods.newCreate);
app.get("/api/wilder/read", WilderController.newMethods.newRead);
app.put("/api/wilder/update", WilderController.newMethods.newUpdate);
app.delete("/api/wilder/delete", WilderController.newMethods.newDelete);

app.listen(3000, _=> console.log('SERVER STARTED ON PORT : 3000'));

