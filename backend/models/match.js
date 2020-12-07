// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// les attributs de backend doit etre les memes dans la partie front end
const matchSchema = mongoose.Schema({
    teamOne: String, //dans le JS 'S' de string doit etre en majuscule
    scoreOne: String,
    teamTwo: String,
    scoreTwo: String,
    image: String //attribute for image

});

//DB Model name
const match = mongoose.model('Match', matchSchema); //crée un model nommé Match contenus le schema matchSchema
//export match variable
module.exports = match;