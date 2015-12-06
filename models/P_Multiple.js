var Pregunta = require('../models/pregunta.js');
var EJS = require('ejs');

function PregSelecMultiple(x, array) {
  Pregunta.call(this);

  this.area_;
  this.pregunta_ = x;
  this.array_ = array;
  
  var self = this;

  EJS.renderFile('views/quizes/P_Selec_Multiple.ejs',{array: this.array_}, function(err,html){
    if(err) throw err;
    else self.area_ = html;
  });
}

PregSelecMultiple.prototype = new Pregunta();

PregSelecMultiple.prototype.constructor = PregSelecMultiple;

PregSelecMultiple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

PregSelecMultiple.prototype.get_area = function(){
  return this.area_;
}

module.exports = PregSelecMultiple;