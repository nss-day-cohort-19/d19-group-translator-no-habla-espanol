// Creates variable that is main function
var Translator = (function (){

    // Create object to hold lexicon
    var frenchTranslate = {
        "Merry": "Joyeux",
        "Christmas": "Noel",
        "and": "et",
        "happy": "content",
        "new": "nouveau",
        "year": "an",
    }
    // Make new empty array to push translated phrase to
    var newTranslationArray = []

    return {
        resetArray : function(){
            newTranslationArray = [];
        },
        setFrench: function(text){
            //takes user input string/splits it to an array, loops through that array and word replaces with new values.
            var frenchSplit = text.split(" ");
            for(var i=0;i<frenchSplit.length;i++){

                newTranslationArray.push(frenchTranslate[frenchSplit[i]]);

            }
        },
        getFrench: function(){
            //joins array together and returns translation
            newTranslation = newTranslationArray.join(" ");
            return newTranslation;
        }

    }


})();

//Div on page to insert new translation
var translatedDiv = document.getElementById("translated");

//Translate button
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

    //Checks which language was selected and performs translation
    if (language === "French"){
        //pass user input into desired translate option
        Translator.resetArray();
        Translator.setFrench(userText);
        //add to div on page
        translatedDiv.innerHTML = `<p>${Translator.getFrench()}</p>`;
    } else if(language === "Hungarian"){
        Translator.resetArray();
        Translator.setHungarian(userText);
        translatedDiv.innerHTML = `<p>${Translator.getHungarian()}</p>`;
    } else if(language === "Spanish"){
        Translator.resetArray();
        Translator.setSpanish(userText);
        translatedDiv.innerHTML = `<p>${Translator.getSpanish()}</p>`;
    }
})


var speakBtn = document.getElementById("speak");
speakBtn.addEventListener("click", function(event){
    console.log(translatedDiv.textContent);
    responsiveVoice.speak(translatedDiv.textContent);

});













