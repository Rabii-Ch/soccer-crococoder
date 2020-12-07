// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// les attributs de backend doit etre les memes dans la partie front end
const userSchema = mongoose.Schema({
    firstName: String, //dans le JS 'S' de string doit etre en majuscule
    lastName: String,
    email: String,
    password: String,
    image: String //attribute for image
});

//DB Model name
const user = mongoose.model('User', userSchema); //crée un model nommé User contenus le schema userSchema
//export match variable
module.exports = user;