var texto = "Int i = 0; float j=2; x=i+j;";
q0(texto);

function L(caracter) {
  if(
    (caracter >= 'a' && caracter <= 'z') ||
    (caracter >= 'A' && caracter <= 'Z')
  ){
    return true;
  }
  else{
    return false;
  }
}

function D(caracter) {
  if(
    (caracter >= '0' && caracter <= '9')
  ){
    return true;
  }
  else{
    return false;
  }
}

function q0(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      (caracter === '_') ||
      L(caracter)
    ){
      q1(cadena.substring(1));
    }
    else{
      q0(cadena.substring(1));
    }
  }
}
function q1(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      (caracter === '_') ||
      L(caracter) ||
      D(caracter)
    ){
      q1(cadena.substring(1));
    }
    else{
      console.log("Identificador");
      q0(cadena.substring(1));
    }
  }
}
