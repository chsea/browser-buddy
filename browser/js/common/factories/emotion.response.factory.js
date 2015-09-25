app.factory('EmotionResponseFactory', function(){

	// function emotionIndex(happiness, sadness){
	// 	return happiness - sadness;
	// }

	// function areYouHappy(){
	// 	if (emotionIndex > 1){
	// 		return true;
	// 	}
	// 	return false;
	// }


	function setEmotion(happiness, sadness){
		emotionObj.happy = happiness;
		emotionObj.sad = sadness;
		emotionObj.emotionIndex = happiness - sadness;
	}

	var emotionObj = {};

	function howDoYouFeel(){
		if (emotionObj.sad < 0.2 && emotionObj.happy < 0.2){
			return "neutral";
		}
		else if(emotionObj.emotionObj < 0.1 && emotionObj.happy > 0.4){
			return "duck face";
		}
		else if(emotionObj.emotionIndex > 0.5){
			return "very happy";
		}
		else if(emotionObj.emotionIndex > 0){
			return "happy";
		}
		else if(emotionObj.emotionIndex < -0.5){
			return "very sad";
		}
		else {
			return "sad";
		}
	};

	return{
		setEmotion: setEmotion,
		howDoYouFeel: howDoYouFeel
	};
})