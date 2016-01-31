window.onload = function(){//wait some time until the document is loaded
    
    var reader = (e) => {
        document.getElementById('printer').innerHTML = e;    
    }    
    
    var printer = (e) => {
       document.getElementById('reader').value = e;
    }
 
    printer('hola sdasdkashdkjahksjhdkajhskdhakjshdkahsdkjhaksdhakshdkajhskdjhaskjdhakjshdkahskjdhaskfaldkshfglksagdflkagsdlkfhg\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\anaasdkhgfsahdgflakhdsglkahsdgflkhsagdflkhagsdlfkhmundo');   
    reader('hola sdasdkashdkjahksjhdkajhskdhakjshdkahsdkjhaksdhakshdkajhskdjhaskjdhakjshdkahskjdhaskfaldkshfglksagdflkagsdlkfhg\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\na\anaasdkhgfsahdgflakhdsglkahsdgflkhsagdflkhagsdlfkhmundo');
}