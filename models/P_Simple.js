var Pregunta = require('../models/pregunta.js');

var EJS = require('ejs');

function PregSelecSimple(q,options,r) {
  Pregunta.call(this,q,r);
	this.toHTML = function(){
		var html = "Pregunta: " + q;
		for (var i = 0; i < options.length; i++) {
			html += '<br><input type="radio" name="respuesta" value="' + options[i] + '">' + options[i];
		}
		html += '<br><input type="submit" value="Enviar">'
		return html;
	}
}

PregSelecSimple.prototype = new Pregunta();

PregSelecSimple.prototype.constructor = PregSelecSimple;


module.exports = PregSelecSimple;