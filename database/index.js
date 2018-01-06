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

var save = function() {
};

module.exports.save = save;