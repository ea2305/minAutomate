window.onload = function(){//wait some time until the document is loaded

    function cargar(e) {

        var archivo = e.target.files;//get information

        var nomre_archivo = archivo[0];//get information of object argumet

        var reader = new FileReader();//Object reader for API file
        reader.readAsText(nomre_archivo);
        reader.addEventListener('load',setInfo,false);//waiting for loading

    }

    function setInfo(e){
        var result = e.target.result;

        document.getElementById('reader').value = result;
    }

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
      var result = pseudocode(text);//Launch automate
      result = (result === "") ? ":v" : result;
      console.log(result);
      printer(result);
    }

    //Handlers
    document.getElementById('launch').addEventListener('click',analize);
    document.getElementById('clean').addEventListener('click',clean);
    document.getElementById('archivo').addEventListener('change', cargar, false);

    //First sentences
    clean();
}
