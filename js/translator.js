

var Translator = (function (){


    var frenchTranslate = {
        "Merry": "Joyeux",
        "Christmas": "Noel",
        "and": "et",
        "happy": "content",
        "new": "nouveau",
        "year": "an"
    }
    var newTranslationArray = []

    return {
        setFrench: function(text){

            var frenchSplit = text.split(" ");
            for(var i=0;i<frenchSplit.length;i++){
                newTranslationArray.push(frenchTranslate[frenchSplit[i]]);

            }
        },
        getFrench: function(){
            newTranslation = newTranslationArray.join(" ");
            return newTranslation;
        }

    }


})();

var translated = document.getElementById("translated");


var translateBtn = document.getElementById("btn-translate");
translateBtn.addEventListener("click", function(event){


    //Store user text into variable

    var userText = document.getElementById("user-text").value;

    //Get user translate option
    var language;
    var translateOption = document.getElementsByName("translate-language");
    for(var i=0;i<translateOption.length;i++){
        if(translateOption[i].selected){
            language = translateOption[i].value;
        }
    }
    if (language === "French"){
        Translator.setFrench(userText);
        translated.innerHTML = `<p>${Translator.getFrench()}</p>`;
    } else if(language === "Hungarian"){
        Translator.setHungarian(userText);
        translated.innerHTML = `<p>${Translator.getHungarian()}</p>`;
    } else if(language === "Spanish"){
        Translator.setSpanish(userText);
        translated.innerHTML = `<p>${Translator.getSpanish()}</p>`;
    }


    //pass user input into desired translate option

    //return translation

    //add to div on page



})
