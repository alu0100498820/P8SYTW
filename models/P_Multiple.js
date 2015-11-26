var Pregunta = require('../models/pregunta.js');

function PreguntaSelecMultiple(x, array) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.array_ = array;
}

PreguntaSelecMultiple.prototype = new Pregunta();

PreguntaSelecMultiple.prototype.constructor = PreguntaSelecMultiple;

PreguntaSelecMultiple.prototype.vista = function(){
  var vista = [];

  for(var i=0; i<this.array_.length; i++){
    vista[i] = "<option>" + this.array_[i] + "</option>";
  }

  vista.unshift("<select name='respuesta[]' size=" + this.array_.length + " multiple>");
  vista.push("</select>");

  return vista;
}

PreguntaSelecMultiple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaSelecMultiple;