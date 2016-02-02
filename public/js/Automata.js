//retorna true si el caracter es una letra
function L(caracter) {return /[a-z]/.test(caracter);}

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
      return "\n" + "abrirLlave" + "\n" + q0(cadena.substring(1));
    if( caracter === '}' )
      return "\n" + "cerrarLlave" + "\n" + q0(cadena.substring(1));
    if( caracter === '[' )
      return "\n" + "abrirBrackets" + "\n" + q0(cadena.substring(1));
    if( caracter === ']' )
      return "\n" + "cerrarBrackets" + "\n" + q0(cadena.substring(1));
    if( caracter === ';' )
      return "\n" + "PuntoYComa" + "\n" + q0(cadena.substring(1));
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
      return "\n" + "Identificador" + q0(cadena);
  }
  return "";
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
  return "";
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
  return "";
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
  return "";
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
  return "";
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
  return "";
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
      return "\n" + "Dividir" + q0(cadena);
  }
  return "";
}
//estado q9
function q9(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if( caracter === '\n' )
      return "\n" + "Comentario" + "\n" + q0(cadena.substring(1));
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
      return "\n" + "Comentario" + "\n" + q0(cadena.substring(1));
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
  return "";
}
