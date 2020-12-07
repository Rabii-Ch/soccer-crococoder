//import express module
const express = require('express');
//create backend application
const app = express();

//import body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import mongoose module 
const mongoose = require('mongoose');
// import multer
const multer = require('multer');
const path = require('path'); //il nous donne l'accees a acceder un dossier particulier dans le serveur 
//define image folder destination
app.use('/images', express.static(path.join('backend/images'))) //configuration du path
    //import match model from models/match
const Match = require('./models/match');
const Player = require('./models/player');
const User = require('./models/user');
const Stadium = require('./models/stadium');
// connect application to DB named soccerDB et on change le nom test par le nom de DB
// if not exist, create DB, else connect automatically
mongoose.connect('mongodb://localhost:27017/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// define images to insert
const MIME_TYPE = { //mediafile :
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        //verify if image corresponds to mine type
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    //define file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-'); //filename:original name minuscule et changer tout espace par "-"
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder' + '.' +
            extension;
        cb(null, imgName); //return
    }
});

// / = http://localhost:3000/

//application Matches
app.get('/allMatches', (req, res) => {
    // here traitement
    console.log('i am here for allMatches');
    //connect to DB and get all Matches


    Match.find((err, docs) => { //find fonction predefini 
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'Here all objects',
                matches: docs
            });
        }
    });

});
app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding');
    url = req.protocol + '://' + req.get('host');
    // reate object to insert into DB
    const match = new Match({
        scoreOne: req.body.scoreOne,
        teamOne: req.body.teamOne,
        scoreTwo: req.body.scoreTwo,
        teamTwo: req.body.teamTwo,
        image: url + '/images/' + req.file.filename
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    match.save().then(
        result => {
            res.status(200).json({
                message: "Added succesfully",
            });
        }
    );
});
app.delete('/deleteMatch/:id', (req, res) => {
    console.log('here in delete', req.params.id); //envoie de l'id dynamique
    Match.deleteOne({ _id: req.params.id }).then( //fonction predefini teb3a mongoose
        result => {
            res.status(200).json({
                message: 'Deleted Successfully'
            })
        }
    )
});
app.get('/displayMatch/:id', (req, res) => {
    console.log('here in get', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        data => {
            if (data) { //if data existe ...
                res.status(200).json({
                    match: data
                });
            }
        }
    )
});
app.put('/editMatch/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const match = new Match({
        _id: req.body._id,
        scoreOne: req.body.scoreOne,
        teamOne: req.body.teamOne,
        scoreTwo: req.body.scoreTwo,
        teamTwo: req.body.teamTwo
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    // update takes 2 params: 1st for search object and 2nd to replace it
    Match.update({ _id: req.params.id }, match).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'Updated Successfully'
                })
            }
        }
    )
});

//application users
app.post('/addUser', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding');
    url = req.protocol + '://' + req.get('host');
    // reate object to insert into DB
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        image: url + '/images/' + req.file.filename
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    user.save().then(
        result => {
            res.status(200).json({
                message: "Added succesfully",
            });
        }
    );
});
app.get('/allUsers', (req, res) => {
    // here traitement
    console.log('i am here for allUsers');
    //connect to DB and get all Matches


    User.find((err, docs) => { //find fonction predefini 
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'Here all objects',
                users: docs
            });
        }
    });

});
app.delete('/deleteUser/:id', (req, res) => {
    console.log('here in delete', req.params.id); //envoie de l'id dynamique
    User.deleteOne({ _id: req.params.id }).then( //fonction predefini teb3a mongoose
        result => {
            res.status(200).json({
                message: 'Deleted Successfully'
            })
        }
    )
});
app.get('/displayUser/:id', (req, res) => {
    console.log('here in get', req.params.id);
    User.findOne({ _id: req.params.id }).then(
        data => {
            if (data) { //if data existe ...
                res.status(200).json({
                    user: data
                });
            }
        }
    )
});
app.put('/editUser/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const user = new User({
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    // update takes 2 params: 1st for search object and 2nd to replace it
    User.update({ _id: req.params.id }, user).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'Updated Successfully'
                })
            }
        }
    )
});
//application players
app.post('/addPlayer', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding');
    url = req.protocol + '://' + req.get('host');
    // reate object to insert into DB
    const player = new Player({
        name: req.body.name,
        lastName: req.body.lastName,
        discription: req.body.discription,
        image: url + '/images/' + req.file.filename
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    player.save().then(
        result => {
            res.status(200).json({
                message: "Added succesfully",
            });
        }
    );
});
app.get('/allPlayers', (req, res) => {
    // here traitement
    console.log('i am here for allUsers');
    //connect to DB and get all Matches


    Player.find((err, docs) => { //find fonction predefini 
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'Here all objects',
                players: docs
            });
        }
    });

});
app.delete('/deletePlayer/:id', (req, res) => {
    console.log('here in delete', req.params.id); //envoie de l'id dynamique
    Player.deleteOne({ _id: req.params.id }).then( //fonction predefini teb3a mongoose
        result => {
            res.status(200).json({
                message: 'Deleted Successfully'
            })
        }
    )
});
app.get('/displayPlayer/:id', (req, res) => {
    console.log('here in get', req.params.id);
    Player.findOne({ _id: req.params.id }).then(
        data => {
            if (data) { //if data existe ...
                res.status(200).json({
                    player: data
                });
            }
        }
    )
});
app.put('/editPlayer/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const player = new Player({
        _id: req.body._id,
        name: req.body.name,
        lastName: req.body.lastName,
        discription: req.body.discription,

        //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    // update takes 2 params: 1st for search object and 2nd to replace it
    Player.update({ _id: req.params.id }, player).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'Updated Successfully'
                })
            }
        }
    )
});
//login user
app.post('/login', (req, res) => {
    console.log('here in login');
    console.log('req body', req.body);
    User.find({ email: req.body.email, password: req.body.password }).then(
        data => {
            console.log('finded user', data);
            if (data) {
                res.status(200).json({
                    user: data
                })
            }
        }
    );

});
//search
app.get('/api/search/:term', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params.term);
    Match.find({ teamOne: req.params.term }).then(
        result => {
            console.log('Here searched result', result);
            if (result) {
                res.send(result);
            }
        }
    )
});

//stadium
app.get('/allStadiums', (req, res) => {
    // here traitement
    console.log('i am here for allStadiums');
    //connect to DB and get all Matches


    Stadium.find((err, docs) => { //find fonction predefini 
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'Here all objects',
                stadiums: docs
            });
        }
    });

});
app.post('/addStadium', (req, res) => {
    console.log('here in adding');
    url = req.protocol + '://' + req.get('host');
    // reate object to insert into DB
    const stadium = new Stadium({
        name: req.body.name,
        country: req.body.country,
        capacity: req.body.capacity

        //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    stadium.save().then(
        result => {
            res.status(200).json({
                message: "Added succesfully",
            });
        }
    );
});
app.delete('/deleteStadium/:id', (req, res) => {
    console.log('here in delete', req.params.id); //envoie de l'id dynamique
    Stadium.deleteOne({ _id: req.params.id }).then( //fonction predefini teb3a mongoose
        result => {
            res.status(200).json({
                message: 'Deleted Successfully'
            })
        }
    )
});
app.get('/displayStadium/:id', (req, res) => {
    console.log('here in get', req.params.id);
    Stadium.findOne({ _id: req.params.id }).then(
        data => {
            if (data) { //if data existe ...
                res.status(200).json({
                    stadium: data
                });
            }
        }
    )
});
app.put('/editStadium/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const stadium = new Stadium({
        _id: req.body._id,
        name: req.body.name,
        country: req.body.country,
        capacity: req.body.capacity
            //il faut installer body-parser pour le parsing du request de la partie FE(npm i --save body-parser)
    });
    // update takes 2 params: 1st for search object and 2nd to replace it
    Stadium.update({ _id: req.params.id }, stadium).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'Updated Successfully'
                })
            }
        }
    )
});

module.exports = app; //5allina l app exportable bech najjmou n importiwha min ay fichier