var Pregunta = require('../models/pregunta.js');
var EJS = require('ejs');

function PregSelecSimple(x, array) {
  Pregunta.call(this);

  this.area_;
  this.pregunta_ = x;
  this.array_ = array;
  
  var self = this;

  EJS.renderFile('views/quizes/P_Selec_Simple.ejs',{array: this.array_}, function(err,html){
    if(err) throw err;
    else self.area_ = html;
  });

}

PregSelecSimple.prototype = new Pregunta();

PregSelecSimple.prototype.get_area = function(){
  return this.area_;
}

PregSelecSimple.prototype.constructor = PregSelecSimple;

PregSelecSimple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PregSelecSimple;