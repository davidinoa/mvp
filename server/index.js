var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var testData = [
  {
    question: 'How would you set an environment variable X to the value 11 in your terminal?',
    hint: '',
    answer: 'export X=11'
  },
  {
    question: 'What Javascript instantiation pattern uses the keyword "new"?',
    hint: 'Is the most used pattern',
    answer: 'Pseudoclassical'
  }
];

app.get('/flashcards', function(req, res) {
  res.json(testData);
});

app.post('/flashcards', function(req, res) {
  var newFlashcard = {
    topic: req.body.topic,
    question: req.body.question,
    answer: req.body.answer,
    hint: req.body.hint,
  };
  testData.push(newFlashcard);
  res.status(201).redirect('/');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});