var Pregunta = require('../models/pregunta.js');

function PregSelecMultiple(x, array) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.array_ = array;
}

PregSelecMultiple.prototype = new Pregunta();

PregSelecMultiple.prototype.constructor = PregSelecMultiple;

PregSelecMultiple.prototype.vista = function(){
  var vista = [];

  for(var i=0; i<this.array_.length; i++){
    vista[i] = "<option>" + this.array_[i] + "</option>";
  }

  vista.unshift("<select name='respuesta[]' size=" + this.array_.length + " multiple>");
  vista.push("</select>");

  return vista;
}

PregSelecMultiple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PregSelecMultiple;