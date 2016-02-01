//Prueba
var texto = "Int i = 0; float j=2; x=i+j;";
console.log(texto);
console.log(iniciar(texto));
//retorna true si el caracter es una letra
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
//retorna true si el caracter es un digito
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
//inicia el automata
function iniciar(texto) {
  return q0(texto);
}
//estado q0
function q0(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      (caracter === '_') ||
      L(caracter)
    ){
      return q1(cadena.substring(1));
    }
    if(
      D(caracter)
    ){
      return q2(cadena.substring(1));
    }
    else{
      return q0(cadena.substring(1));
    }
  }
  return "";
}
//estado q1
function q1(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      (caracter === '_') ||
      L(caracter) ||
      D(caracter)
    ){
      return q1(cadena.substring(1));
    }
    else{
      return "\t" + "Identificador" + q0(cadena.substring(1));
    }
  }
  return "";
}
//estado q2
function q2(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      D(caracter)
    ){
      return q2(cadena.substring(1));
    }
    else{
      return "\t" + "Entero" + q0(cadena.substring(1));
    }
  }
  return "";
}
