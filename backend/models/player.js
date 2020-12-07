// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// les attributs de backend doit etre les memes dans la partie front end
const playerSchema = mongoose.Schema({
    name: String, //dans le JS 'S' de string doit etre en majuscule
    lastName: String,
    discription: String,
    image: String

});

//DB Model name
const player = mongoose.model('Player', playerSchema); //crée un model nommé Match contenus le schema matchSchema
//export match variable
module.exports = player;