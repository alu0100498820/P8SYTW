var Quiz = require('../models/quiz_model');
var quiz = new Quiz();
var current = quiz.randomQuestion();
var  current_new = quiz.getQuestion(current);
var  area = quiz.getArea(current);

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  current_new = quiz.getQuestion(current);
  area = quiz.getArea(current);
  res.render('quizes/question', {pregunta: current_new, area: area});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.questions = function(req,res) {
  var nPreg = quiz.numQuestions();
  var array = new Array(nPreg);

  for(var i=0; i<nPreg; i++) {
    array[i] = (quiz.getQ(i));
  }
  res.render('quizes/questions', {prg: array})
};

exports.specificQuestion = function(req, res) {
  var id = req.params.id;
  var nPreg = quiz.numQuestions();

  if(id < 1 || id > nPreg){
    res.render('quizes/SpecificQuestion', {prg: "La pregunta NO existe."})
  }
  else if(isNaN(id) === true) {
    res.render('quizes/SpecificQuestion', {prg: "URL Error"})
  }
  else {
    current = quiz.q[id-1];
    current_new = quiz.getQuestion(current);
    area = quiz.getArea(current);
    res.render('quizes/question', {pregunta: current_new, area: area});
  }
};