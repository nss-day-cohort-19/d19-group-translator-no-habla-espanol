

var Translator = (function (){
    var toTranslate;

    return {
        setFrench: function(text){
            toTranslate = text;
        },
        getFrench: function(){
            return toTranslate;
        }
    }


})();


var translateBtn = document.getElementById("btn-translate");
translateBtn.addEventListener("click", function(event){


    //Store user text into variable

    var userText = document.getElementById("user-text").value;

    //Get user translate option
    var language;
    var translateOption = document.getElementsByName("translate-language");
    for(var i=0;i<translateOption.length;i++){
        if(translateOption[i].value === "French"){
                Translator.setFrench(userText);
        }
    }



    console.log("toTranslate", Translator.getFrench());

    //pass user input into desired translate option

    //return translation

    //add to div on page



})
