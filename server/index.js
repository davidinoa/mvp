var express = require('express');
var bodyParser = require('body-parser');
var saveToMongo = require('../database/index').save;
var removeFromMongo = require('../database/index').remove;
var retrieveAllFromMongo = require('../database/index').retrieveAll;

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/flashcards', function(req, res) {
  retrieveAllFromMongo(function(err, flashcards) {
    if (err) { return console.error(err); }
    res.send(flashcards);
  });
});

app.post('/flashcards', function(req, res) {
  var newFlashcard = {
    topic: req.body.topic,
    question: req.body.question,
    answer: req.body.answer,
    hint: req.body.hint,
  };
  
  saveToMongo([newFlashcard])
    .then(function() {
      res.status(201).redirect('/#create-form');
    });
});

app.delete('/flashcards', function(req, res) {
  removeFromMongo(req.body.question, function() {
    retrieveAllFromMongo(function(err, flashcards) {
      if (err) { return console.error(err); }
      res.send(flashcards);
    });
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});