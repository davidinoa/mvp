var express = require('express');
var bodyParser = require('body-parser');
var saveToMongo = require('../database/index').save;
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
      res.status(201).redirect('/');
    });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});