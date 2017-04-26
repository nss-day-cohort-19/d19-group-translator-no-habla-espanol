console.log("spanish.js loaded");
var Translator = (function(oldTranslator){

    var spanishTranslate = {
        "Merry": "Feliz",
        "Christmas": "Navidad",
        "and": "y",
        "happy": "Pr&#243spero",
        "new": "Nuevo",
        "year": "A&#241o"
    }
    var newTranslationArray = []

        oldTranslator.resetSpanish = function() {
             newTranslationArray = [];
         }

        oldTranslator.setSpanish = function(text){
            var spanishSplit = text.split(" ");
            for(var i=0; i<spanishSplit.length; i++){
                newTranslationArray.push(spanishTranslate[spanishSplit[i]]);
            }
        }
        oldTranslator.getSpanish = function(){
            newTranslation = newTranslationArray.join(" ");
            return newTranslation;
        }
        return oldTranslator

}(Translator || {}));


console.log(Translator);
