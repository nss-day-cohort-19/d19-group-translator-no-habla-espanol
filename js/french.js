// Creates variable that is main function
var Translator = (function (oldTranslation){

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


        oldTranslation.resetArray= function(){
            newTranslationArray = [];
        }

        oldTranslation.setFrench= function(text){
            //takes user input string/splits it to an array, loops through that array and word replaces with new values.
            var frenchSplit = text.split(" ");
            for(var i=0;i<frenchSplit.length;i++){

                newTranslationArray.push(frenchTranslate[frenchSplit[i]]);

            }
        }

        oldTranslation.getFrench = function(){
            //joins array together and returns translation
            newTranslation = newTranslationArray.join(" ");
            return newTranslation;
        }

    return oldTranslation



}(Translator || {}));