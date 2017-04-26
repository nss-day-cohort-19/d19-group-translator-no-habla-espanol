console.log("hungarian.js")
Translator = (function(originalTranslator){

	var hungarianTranslate = {
		"Merry": "Vidám",
		"Christmas": "Karácsony",
		"and": "és",
		"happy": "boldog",
		"new": "új",
		"year": "év",
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
