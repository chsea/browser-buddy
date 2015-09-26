app.factory('EmotionResponseFactory', function(){
	var emotionObj = {};

	function setEmotion(happiness, sadness){
		emotionObj.happy = happiness;
		emotionObj.sad = sadness;
		emotionObj.emotionIndex = happiness - sadness;
	}

	function howDoYouFeel(){
		if (emotionObj.sad < 0.2 && emotionObj.happy < 0.2){
			return "neutral";
		}
		else if(emotionObj.emotionIndex < 0.1 && emotionObj.happy > 0.3){
			return "duckFace";
		}
		else if(emotionObj.emotionIndex > 0.5){
			return "veryHappy";
		}
		else if(emotionObj.emotionIndex > 0){
			return "happy";
		}
		else if(emotionObj.emotionIndex < -0.5){
			return "verySad";
		}
		else {
			return "sad";
		}
	}

	return{
		setEmotion: setEmotion,
		howDoYouFeel: howDoYouFeel
	};
});
