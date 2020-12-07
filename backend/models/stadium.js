// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// les attributs de backend doit etre les memes dans la partie front end
const stadiumSchema = mongoose.Schema({
    name: String, //dans le JS 'S' de string doit etre en majuscule
    country: String,
    capacity: String

});

//DB Model name
const stadium = mongoose.model('Stadium', stadiumSchema); //crée un model nommé Match contenus le schema matchSchema
//export match variable
module.exports = stadium;