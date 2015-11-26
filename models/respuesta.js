function Respuesta(x){
  if(typeof(x)==='string' || typeof(x)==='number'){
    return function(res){return res === x;};
  }
  else if(x instanceof RegExp === true){
    return function(res){return res.match(x);};
  }
  
  else if(x instanceof Array){
    return function(res){
      if(x.length != res.length) return false;

      var option = true;

      for(var i=0; i<x.length; i++){
        if(x[i] != res[i]) option = false;
      }
      return option;
    };
  }
  
  else {
    return x;
  }
}

module.exports = Respuesta;