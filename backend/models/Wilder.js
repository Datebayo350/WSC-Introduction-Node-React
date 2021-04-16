const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//? Creation d'un modèle de document (structure de la table en SQL) que l'on pourra utiliser par la suite pour intéragire en lecture / écriture dans la collection concernée, à savoir wilders
const WilderSchema = new Schema({
    name:  {type: String, unique: true},
    city: String,
    skills: [{
        title: String,
        années: Number,
    }]
});

module.exports = mongoose.model("wilder", WilderSchema);
