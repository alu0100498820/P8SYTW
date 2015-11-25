var AbstractQuiz = require('../models/abstract_quiz_model.js');
var Respuesta = require('../models/respuesta.js');
var PreguntaLarga = require('../models/pregunta_larga.js');
var PreguntaCorta = require('../models/pregunta_corta.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new PreguntaCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },

    { pregunta: new PreguntaLarga('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },
    //*************************************************************************************************************************************
    { pregunta: new PreguntaCorta('¿Quien es el CEO de Apple Inc.?'),
      respuesta: new Respuesta(/^\s*tim cook\s*$/i)
    },

    { pregunta: new PreguntaCorta('Lenovo, la empresa que fabrica de ordenadores, tablets y smartphones, es el acronimo de . . .'),
      respuesta: new Respuesta(/^\s*nueva leyenda\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿Cuando se creo la ULL (Universidad de la Laguna)?'),
      respuesta: new Respuesta(/^\s*1927\s*$/i)
    },
 
    { pregunta: new PreguntaCorta('¿Cual es el equipo de la NBA con mas campeonatos?'),
      respuesta: new Respuesta(/^\s*boston celtics\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿Quien reinaba en España cuando el Imperio español alcanzo su cúspide territorial?'),
      respuesta: new Respuesta(/^\s*carlos IV\s*$/i)
    },

    //*************************************************************************************************************************************    
    
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado'),
      respuesta: new Respuesta( function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      })
    }
  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: new PreguntaCorta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            return (x == n1*n2);
        })
      });
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;
Quiz.prototype.numQuestions = function() {
  return this.q.length;
}
Quiz.prototype.getQ = function(x){
  return this.q[x]['pregunta'].get_pregunta();
}
Quiz.prototype.getQuestion = function(x){
  return x['pregunta'].get_pregunta();
}
Quiz.prototype.getArea = function(x){
  return x['pregunta'].get_area();
}

module.exports = Quiz;