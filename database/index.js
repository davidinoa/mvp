var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var flashcardSchema = mongoose.Schema({
  topic: String,
  question: String,
  answer: String,
  hint: String
});

var Flashcard = mongoose.model('Flashcard', flashcardSchema);

var save = function(flashcards) {
  return new Promise(function(resolve, reject) {
    flashcards.forEach(function(flashcard) {
      new Flashcard({
        topic: flashcard.topic,
        question: flashcard.question,
        answer: flashcard.answer,
        hint: flashcard.hint
      })
        .save(function(err) {
          if (err) { reject(err); }
          console.log('Document created');
        });
      resolve();
    }); 
  }); 
};

var retrieveAll = function(callback) {
  Flashcard.find({}, function(err, flashcards) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, flashcards);
    }
  });
};

module.exports.save = save;