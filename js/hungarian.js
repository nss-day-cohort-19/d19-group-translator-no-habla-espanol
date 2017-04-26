console.log("hungarian.js")
Translator = (function(originalTranslator){

	var hungarianTranslate = {
		"Merry": "Vid&#225m",
		"Christmas": "Kar&#225csony",
		"and": "&#233s",
		"happy": "boldog",
		"new": "&#250j",
		"year": "&#233v",
	}
	var newTranslationArray = []

		originalTranslator.setHungarian = function(text){
			var hungarianSplit = text.split(" ");
			for(var i=0; i<hungarianSplit.length; i++){
				newTranslationArray.push(hungarianTranslate[hungarianSplit[i]]);
			}
		}
		originalTranslator.getHungarian = function(){
			newTranslation = newTranslationArray.join(" ");
			return newTranslation;
		}
		return Translator
	
})(Translator);

