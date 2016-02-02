window.onload = function(){//wait some time until the document is loaded

    var reader = (e) => {
        document.getElementById('reader').value = e;
    }

    var printer = (e) => {
       document.getElementById('printer').value = e;
    }
    
    function clean(){
        reader('');
        printer(''); 
    }
    
    function analize(){
      var text = document.getElementById('reader').value;
      console.log(text);
      var result = iniciar(text);//Launch automate
      console.log(result);
      printer(result);
    }
    
    //Handlers
    document.getElementById('launch').addEventListener('click',analize);
    document.getElementById('clean').addEventListener('click',clean);
    
    //First sentences
    clean();
}
