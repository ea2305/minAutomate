window.onload = function(){//wait some time until the document is loaded

    var reader = (e) => {
        document.getElementById('printer').innerHTML = e;
    }

    var printer = (e) => {
       document.getElementById('reader').value = e;
    }

    var texto = "int main(args []){ printf();}";
    printer(texto);//load info in text boxs
    reader(iniciar(texto));//load info in text boxs
    
}
