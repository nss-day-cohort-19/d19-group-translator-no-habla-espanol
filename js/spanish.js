console.log("spanish.js loaded");
Translator = (function(originalTranslator){

    var spanishTranslate = {
        "Merry": "Feliz",
        "Christmas": "Navidad",
        "and": "y",
        "happy": "Pr&#243spero",
        "new": "Nuevo",
        "year": "A&#241o"
    }
    var newTranslationArray = []

        originalTranslator.setSpanish = function(text){
            var spanishSplit = text.split(" ");
            for(var i=0; i<spanishSplit.length; i++){
                newTranslationArray.push(spanishTranslate[spanishSplit[i]]);
            }
        }
        originalTranslator.getSpanish = function(){
            newTranslation = newTranslationArray.join(" ");
            return newTranslation;
        }
        return Translator

})(Translator);