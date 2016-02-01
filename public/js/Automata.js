//Prueba
var texto = "Int i = 0;\n float j=2;\n x=i+j;\n";
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
    if(
      caracter === '='
    ){
      return q3(cadena.substring(1));
    }
    if(
      caracter === ';'
    ){
      return q4(cadena.substring(1));
    }
    if(
      caracter === '+'
    ){
      return q5(cadena.substring(1));
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
      return "\t" + "Identificador" + q0(cadena);
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
      return "\t" + "Entero" + q0(cadena);
    }
  }
  return "";
}
//estado q3
function q3(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      caracter === '='
    ){
      return q3(cadena.substring(1));
    }
    else{
      return "\t" + "Asignacion" + q0(cadena);
    }
  }
  return "";
}
//estado q4
function q4(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    return "\t" + "PuntoYComa" + "\n" + q0(cadena);
  }
  return "";
}
//estado q5
function q5(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      caracter === '+'
    ){
      return q5(cadena.substring(1));
    }
    else{
      return "\t" + "suma" + q0(cadena);
    }
  }
  return "";
}
