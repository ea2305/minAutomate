//Prueba
var texto = (
  "/**\n"+
  "*@author Flyzx\n"+
  "*@version 0.2\n"+
  "*/\n"+
  "package transformacionClaves;\n"+
  "/**\n"+
  "*Clase con la estructura de un Integer para Hash\n"+
  "*/\n"+
  "public class Dato{\n"+
  "// contiene la clave\n"+
  "private int clave;\n"+
  "//contiene el dato\n"+
  "private Integer dato;\n"+
  "/**\n"+
  "*constructor\n"+
  "*@param int: la clave, Integer: el dato\n"+
  "*/\n"+
  "public Dato(int clave, Integer dato){\n"+
  "this.clave = clave;\n"+
  "this.dato = dato;\n"+
  "}\n"+
  "/**\n"+
  "*@return int: la clave\n"+
  "*/\n"+
  "public int getClave(){\n"+
  "return this.clave;\n"+
  "}\n"+
  "/**\n"+
  "*@return Integer: el dato\n"+
  "*/\n"+
  "public Integer getDato(){\n"+
  "return this.dato;\n"+
  "}\n"+
  "}\n"
);
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
    if( (caracter === '_') || L(caracter) )
      return q1(cadena.substring(1));
    if( D(caracter) )
      return q2(cadena.substring(1));
    if( caracter === '+' )
      return q3(cadena.substring(1));
    if( caracter === '-' )
      return q4(cadena.substring(1));
    if( caracter === '=' )
      return q5(cadena.substring(1));
    if( caracter === '<' )
      return q6(cadena.substring(1));
    if( caracter === '>' )
      return q7(cadena.substring(1));
    if( caracter === '/' )
      return q8(cadena.substring(1));
    if( caracter === '.' )
      return "\t" + "Punto" + q0(cadena.substring(1));
    if( caracter === '*' )
      return "\t" + "Multripicas" + q0(cadena.substring(1));
    if( caracter === '^' )
      return "\t" + "Elevar" + q0(cadena.substring(1));
    if( caracter === '(' )
      return "\t" + "abrirParentesis" + q0(cadena.substring(1));
    if( caracter === ')' )
      return "\t" + "cerrarParentesis" + q0(cadena.substring(1));
    if( caracter === '{' )
      return "\t" + "abrirLlave" + "\n" + q0(cadena.substring(1));
    if( caracter === '}' )
      return "\t" + "cerrarLlave" + "\n" + q0(cadena.substring(1));
    if( caracter === ';' )
      return "\t" + "PuntoYComa" + "\n" + q0(cadena.substring(1));
    else
      return q0(cadena.substring(1));
  }
  return "";
}
//estado q1
function q1(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( (caracter === '_') || L(caracter) || D(caracter) )
      return q1(cadena.substring(1));
    else
      return "\t" + "Identificador" + q0(cadena);
  }
  return "";
}
//estado q2
function q2(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( D(caracter) )
      return q2(cadena.substring(1));
    else
      return "\t" + "Entero" + q0(cadena);
  }
  return "";
}
//estado q3
function q3(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '+' )
      return "\t" + "incremento" + q0(cadena.substring(1));
    if( D(caracter) )
      return q2(cadena.substring(1));
    else
      return "\t" + "suma" + q0(cadena);
  }
  return "";
}
//estado q4
function q4(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '-' )
      return "\t" + "decremento" + q0(cadena.substring(1));
    if( D(caracter) )
      return q2(cadena.substring(1));
    else
      return "\t" + "resta" + q0(cadena);
  }
  return "";
}
//estado q5
function q5(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\t" + "comparacion" + q0(cadena.substring(1));
    else
      return "\t" + "asignacion" + q0(cadena);
  }
  return "";
}
//estado q6
function q6(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\t" + "menorIgual" + q0(cadena.substring(1));
    else
      return "\t" + "menor" + q0(cadena);
  }
  return "";
}
//estado q7
function q7(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\t" + "mayorIgual" + q0(cadena.substring(1));
    else
      return "\t" + "mayor" + q0(cadena);
  }
  return "";
}
//estado q8
function q8(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '/' )
      return q9(cadena.substring(1));
    if( caracter === '*' )
      return q10(cadena.substring(1));
    else
      return "\t" + "Dividir" + q0(cadena);
  }
  return "";
}
//estado q9
function q9(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '\n' )
      return "\t" + "Comentario" + "\n" + q0(cadena.substring(1));
    else
      return q9(cadena.substring(1));
  }
  return "";
}
//estado q10
function q10(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '*' )
      return q11(cadena.substring(1));
    else
      return q10(cadena.substring(1));
  }
  return "";
}
//estado q11
function q11(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '/' )
      return "\t" + "Comentario" + "\n" + q0(cadena.substring(1));
    else
      return q10(cadena.substring(1));
  }
  return "";
}
