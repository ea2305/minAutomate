//contador de lineas
var line = 0;
//contador de caracteres por linea
var character = 0;

function _shift(queuePseudocode) {
  var a = queuePseudocode.shift();
  if(a === '\n'){
    line++;
    character = 0;
  }else{
    character++;
  }
  return a;
}

//<pseudocode>
function pseudocode(strPseudocode) {
  line = 0;
  character = 0;
  //convertimos strPseudocode a una cola
  var queuePseudocode = strPseudocode.split("");
  //<data>
  var resultA = data(queuePseudocode);

  //Recorremos todos los caminos
  /*var resultB = code(queuePseudocode.slice());

  if(resultB.equals("") )
    resultB = code(queuePseudocode);
  else if(cycles(queuePseudocode.slice()).equals("") )
    resultB = cycles(queuePseudocode);
  else if(assign(queuePseudocode.slice()).equals("") )
    resultB = assign(queuePseudocode);
  else if(_function(queuePseudocode.slice()).equals("") )
    resultB = _function(queuePseudocode);*/

  //retornamos errores
  return resultA /*+ resultB*/;
}

//<data>
function data(queuePseudocode) {
  var resultA = name(queuePseudocode);
  /*var resultB = inputOutput(queuePseudocode);*/
  return resultA /*+ resultB*/;
}

//<name>
function name(queuePseudocode) {
  var resultA = wordAlgorithm(queuePseudocode);

  /*var resultB = identifier(queuePseudocode.slice());

  if(resultB.equals("") )
    resultB = identifier(queuePseudocode);
  else if(letter(queuePseudocode.slice()).equals("") )
    resultB = letter(queuePseudocode);*/

  return resultA /*+ resultB*/;
}

//<wordAlgorithm>
function wordAlgorithm(queuePseudocode) {
  if(_shift(queuePseudocode) !== 'a')
    return("\n"+"("+line+","+character+") expected a");
  else if(_shift(queuePseudocode) !== 'l')
    return("\n"+"("+line+","+character+") expected l");
  else if(_shift(queuePseudocode) !== 'g')
    return("\n"+"("+line+","+character+") expected g");
  else if(_shift(queuePseudocode) !== 'o')
    return("\n"+"("+line+","+character+") expected o");
  else if(_shift(queuePseudocode) !== 'r')
    return("\n"+"("+line+","+character+") expected r");
  else if(_shift(queuePseudocode) !== 'i')
    return("\n"+"("+line+","+character+") expected i");
  else if(_shift(queuePseudocode) !== 't')
    return("\n"+"("+line+","+character+") expected t");
  else if(_shift(queuePseudocode) !== 'h')
    return("\n"+"("+line+","+character+") expected h");
  else if(_shift(queuePseudocode) !== 'm')
    return("\n"+"("+line+","+character+") expected m");
  else return "";
}
