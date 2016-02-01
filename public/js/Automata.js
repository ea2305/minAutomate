function q0(cadena) {
  if(cadena.length != 0){
    var caracter = cadena.charAt(0);
    if(
      (caracter === '_') ||
      (caracter >= 'a' && caracter <= 'z') ||
      (caracter >= 'A' && caracter <= 'Z')
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
      (caracter >= 'a' && caracter <= 'z') ||
      (caracter >= 'A' && caracter <= 'Z') ||
      (caracter >= '0' && caracter <= '1')
    ){
      q1(cadena.substring(1));
    }
    else{
      console.log("Identificador");
      q0(cadena.substring(1));
    }
  }
}
