//Memoria Temporal
var memoria = "";

//palabras Reservadas
var palabrasReservadas = ["int", "double", "fload", "String", "main"];

//comprueba si es una palabra
function comprovarPalabrasReservadas(palabra) {
  for (var i = 0; i < palabrasReservadas.length; i++) {
    console.log(palabra);
    if(palabrasReservadas[i] === palabra)
      return true;
    else
      return false;
  }
}

//retorna true si el caracter es una letra minuscula
function min(caracter) {return /[a-z]/.test(caracter);}

//retorna true si el caracter es una letra minuscula
function may(caracter) {return /[A-Z]/.test(caracter);}

//retorna true si el caracter es un digito
function D(caracter) {return /[0-9]/.test(caracter);}

//inicia el automata
function iniciar(texto) {
  return q0(texto);
}

//estado q0
function q0(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( (caracter === '_') || min(caracter) || may(caracter) ){
      memoria += caracter;
      return q1(cadena.substring(1));
    }
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
    if( caracter === '"' )
      return q13(cadena.substring(1));
    if( caracter === '.' )
      return "\n" + "Punto" + q0(cadena.substring(1));
    if( caracter === '*' )
      return "\n" + "Multripicas" + q0(cadena.substring(1));
    if( caracter === '^' )
      return "\n" + "Elevar" + q0(cadena.substring(1));
    if( caracter === '(' )
      return "\n" + "abrirParentesis" + q0(cadena.substring(1));
    if( caracter === ')' )
      return "\n" + "cerrarParentesis" + q0(cadena.substring(1));
    if( caracter === '{' )
      return "\n" + "abrirLlave" + q0(cadena.substring(1));
    if( caracter === '}' )
      return "\n" + "cerrarLlave" + q0(cadena.substring(1));
    if( caracter === '[' )
      return "\n" + "abrirBrackets" + q0(cadena.substring(1));
    if( caracter === ']' )
      return "\n" + "cerrarBrackets" + q0(cadena.substring(1));
    if( caracter === ';' )
      return "\n" + "PuntoYComa" + q0(cadena.substring(1));
    else
      return q0(cadena.substring(1));
  }
  return "";
}
//estado q1
function q1(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( (caracter === '_') || min(caracter) || may(caracter) || D(caracter) ){
      memoria += caracter;
      return q1(cadena.substring(1));
    }else{
      if(comprovarPalabrasReservadas(memoria)){
        memoria = "";
        return "\n" + "palabraReservada" + q0(cadena);
      }else {
        memoria = "";
        return "\n" + "Identificador" + q0(cadena);
      }
    }
  }
  memoria = "";
  return "\n" +"Identificador";
}
//estado q2
function q2(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( D(caracter) )
      return q2(cadena.substring(1));
    if( caracter === '.' )
      return q12(cadena.substring(1));
    else
      return "\n" + "Entero" + q0(cadena);
  }
  return "\n" +"Entero";
}
//estado q3
function q3(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '+' )
      return "\n" + "incremento" + q0(cadena.substring(1));
    if( D(caracter) )
      return q2(cadena.substring(1));
    else
      return "\n" + "suma" + q0(cadena);
  }
  return "\n" +"suma";
}
//estado q4
function q4(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '-' )
      return "\n" + "decremento" + q0(cadena.substring(1));
    if( D(caracter) )
      return q2(cadena.substring(1));
    else
      return "\n" + "resta" + q0(cadena);
  }
  return "\n" +"resta";
}
//estado q5
function q5(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\n" + "comparacion" + q0(cadena.substring(1));
    else
      return "\n" + "asignacion" + q0(cadena);
  }
  return "\n" +"asignacion";
}
//estado q6
function q6(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\n" + "menorIgual" + q0(cadena.substring(1));
    else
      return "\n" + "menor" + q0(cadena);
  }
  return "\n" +"menor";
}
//estado q7
function q7(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '=' )
      return "\n" + "mayorIgual" + q0(cadena.substring(1));
    else
      return "\n" + "mayor" + q0(cadena);
  }
  return "\n" +"mayor";
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
      return "\n" + "Dividir" + q0(cadena);
  }
  return "\n" +"Dividir";
}
//estado q9
function q9(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '\n' )
      return "\n" + "Comentario" + q0(cadena.substring(1));
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
      return "\n" + "Comentario" + q0(cadena.substring(1));
    else
      return q10(cadena.substring(1));
  }
  return "";
}
//estado q12
function q12(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( D(caracter) )
      return q12(cadena.substring(1));
    else
      return "\n" + "Decimal" + q0(cadena);
  }
  return "\n" +"Decimal";
}
//estado q13
function q13(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '"' )
      return "\n" + "Cadena" + q0(cadena.substring(1));
    else
      return q13(cadena.substring(1));
  }
  return "";
}
