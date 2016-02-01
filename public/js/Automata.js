function q0(cadena) {
  if(cadena.length != 0){
    q0(cadena.substring(1));
  }
}
