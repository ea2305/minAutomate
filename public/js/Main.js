window.onload = function(){//wait some time until the document is loaded

    var reader = (e) => {
        document.getElementById('printer').innerHTML = e;
    }

    var printer = (e) => {
       document.getElementById('reader').value = e;
    }

    var texto = 'hola sdasdkashdkjahksjhdkajhskdhakjshdkahsdkjhaksdhakshdkajhskdjhaskjdhakjshdkahskjdhaskfaldkshfglksagdflkagsdlkfhg\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\anaasdkhgfsahdgflakhdsglkahsdgflkhsagdflkhagsdlfkhmundo';
    var texto2 = "Identificador0 Identificador1 Identificador2 Identificador3";
    printer(texto);
    reader(texto);
    q0(texto2);
}

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
