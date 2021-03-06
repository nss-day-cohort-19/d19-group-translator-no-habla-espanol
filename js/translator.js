

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
        Translator.resetHungarian();
        Translator.setHungarian(userText);
        translatedDiv.innerHTML = `<p>${Translator.getHungarian()}</p>`;
    } else if(language === "Spanish"){
        Translator.resetSpanish();
        Translator.setSpanish(userText);
        translatedDiv.innerHTML = `<p>${Translator.getSpanish()}</p>`;
    }


})

    //sets speach dialect to reflect the language translation selected.
    var speakBtn = document.getElementById("speak");
    speakBtn.addEventListener("click", function(event){
        //Selects language again
        var language;
        var translateOption = document.getElementsByName("translate-language");
        for(var i=0;i<translateOption.length;i++){
            if(translateOption[i].selected){
                language = translateOption[i].value;
            }
        }

        if (language === "French"){
            responsiveVoice.speak(translatedDiv.textContent,"French Female");
        }else if(language === "Hungarian"){
            responsiveVoice.speak(translatedDiv.textContent,"Hungarian Female");
        } else if(language === "Spanish"){
            responsiveVoice.speak(translatedDiv.textContent,"Spanish Female");
        }

    });
















