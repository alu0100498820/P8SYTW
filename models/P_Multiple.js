var Pregunta = require('../models/pregunta.js');

var EJS = require('ejs');

function PregSelecMultiple(q,options,r) {
  Pregunta.call(this,q,r);
  
  this.toHTML = function(){
		var html = "Pregunta: " + q + " (puede ser más de una)";
		for (var i = 0; i < options.length; i++) {
			html += '<br><input type="checkbox" name="respuesta" value="' + options[i] + '">' + options[i];
		}
		html += '</select><br><input type="submit" value="Enviar">'
		return html;

  }
}
PregSelecMultiple.prototype = new Pregunta();

PregSelecMultiple.prototype.constructor = PregSelecMultiple;

module.exports = PregSelecMultiple;