# Grado de Ingeniería Informática

## Práctica 8: Preguntas de Selección Simple y preguntas de Selección Múltiple.

<p align="Center">
    <img src="http://static1.squarespace.com/static/52fa42e1e4b09494e1ffde13/5396fb78e4b028c25b53e2e2/54f407cfe4b03e3d11f4d237/1442826751724/?format=500w" title="Quiz." width="500" height="150">
</p>

---
#### *Descripción de la Práctica:*

+ Añada preguntas de selección simple y de selección múltiple

+ Estas dos preguntas podrían construirse/formularse como sigue:

        this.q.push(
          { pregunta: new PreguntaSeleccionSimple('¿Capital de Grecia?',·
                                                  ['Madrid', 'Roma', 'Atenas']),
            respuesta: new Respuesta('Atenas')
          },  
          { pregunta: new PreguntaSeleccionMultiple('¿Que animales son mamíferos?',·
                                    ['Ornitorrinco', 'Canguro', 'Ballena', 'Gato']),
            respuesta: new Respuesta(['Ballena', 'Gato'])
+ Para las de selección múltiple la respuesta viene caracterizada por un Array por lo que deberá actualizar la factoría o constructor Respuesta:

        ...
        else if (x instanceof Array){
                  return function(res){
                       ...  
                 };  
        }
+ Cada tipo de pregunta tiene un atributo o método vista o html o como lo quiera llamar. Para construir el valor de dicha propiedad procure que su código javascript no esté lleno de concatenaciones de cadenas, si es necesario use templates.

+ Queremos que la respuesta llegue a nuestra aplicación en forma de Array. Si añadimos como sufijo unos corchetes al nombre de nuestro select , Express (y Rails, PHP, etc.) dejarán los datos enviados en un array:

      <select name="respuesta[]" multiple>
           ...
      </select>



> <span style="color:#3366BB">*Enlace a la página personal*</span> [<img src="http://fielinks.com/sites/default/files/styles/max/public/images/huevo-tux.png" width="50" height="50">](http://alu0100498820.github.io "*Enlace a la página personal*")

---

> [*Enlace repositorio*](https://github.com/alu0100498820/P8SYTW "*Enlace repositorio*")

---

> [*Despliegue de la Aplicación en* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Heroku_logo.png/220px-Heroku_logo.png" width="70" height="20">](https://quiz2-sytw-2015.herokuapp.com/ "*Despliegue de la Aplicación en el Heroku*")