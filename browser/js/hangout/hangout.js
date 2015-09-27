app.directive('hangout', function(EmotionResponseFactory, $http) {
  return {
    restrict: 'E',
    templateUrl: 'js/hangout/hangout.html',
    link: scope => {
      var vid = document.getElementById('user-video');
      var overlay = document.getElementById('overlay');
      var overlayCC = overlay.getContext('2d');
      var vidStream;

      scope.imgSrc = scope.buddy.defaultPicture;
      scope.buddyResponse = "Hello!";

      var getStream = () => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, function(stream) {
            vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
            vidStream = stream;
            getEmotionLoop = setInterval(getEmotion);
            drawLoop();
          }, function() {
            alert("Let me record you!");
          });
        }
      };

      /*********** setup of emotion detection *************/
      var ctrack = new clm.tracker({useWebGL: true});
      ctrack.init(pModel);
      var ec = new emotionClassifier();
      ec.init(emotionModel);
      var emotionData = ec.getBlank();
      var cp, er, getEmotionLoop, emotionLoopStart = false;
      scope.videoOn = false;

      scope.startVideo = () => {
        scope.videoOn = true;
        getStream();
        vid.play();
        ctrack.start(vid);
        $('#overlay').show();
      };

      scope.stopVideo = () => {
        scope.videoOn = false;
        $('#overlay').hide();
        ctrack.stop();
        vidStream.getVideoTracks()[0].stop();
        clearInterval(getEmotionLoop);
        emotionLoopStart = false;
      };

      function drawLoop() {
        requestAnimFrame(drawLoop);
        overlayCC.clearRect(0, 0, 400, 300);
        if (ctrack.getCurrentPosition()) ctrack.draw(overlay);
      }

      function getEmotion() {
        cp = ctrack.getCurrentParameters();
        er = ec.meanPredict(cp);
        if (er && !emotionLoopStart) {
          setEmotionResponse();
          emotionLoopStart = true;
        }
      }

      function setEmotionResponse() {
        EmotionResponseFactory.setEmotion(er[3].value, er[1].value);
        let emotion = EmotionResponseFactory.howDoYouFeel();
        scope.$apply(() => {
          let response = scope.buddy.responses[emotion];
          if (response) {
          	scope.buddyResponse = response.text;
            scope.imgSrc = response.pictureUrl;

            //Play audio or text-to-speech
              let speakEnd = () => {
                if (scope.videoOn) setTimeout(setEmotionResponse, 500);
              };
            if(response.audioUrl) {
              let speak = new Howl({
                urls: [response.audioUrl],
                onend: speakEnd
              }).play();
            } else {
              meSpeak.loadConfig("/js/lib/mespeak/mespeak_config.json");
              meSpeak.loadVoice("/js/lib/mespeak/en.json");
              meSpeak.speak(response.text, {}, speakEnd);
            }

            //Slack out your duckface!!
            if (emotion === 'duckFace') {
              let can = document.getElementById('snapshot');
              can.getContext("2d").drawImage(vid, 0, 0, 533, 400, 0, 0, 533, 400);
              let img = can.toDataURL();
              $http.post('/api/duckface', {name: 'duckface', data: img})
              .then(() => console.log('uploaded!'));
            }
          } else {
            scope.imgSrc = scope.buddy.defaultPicture;
            scope.buddyResponse = "Hello!";
            if (scope.videoOn) setTimeout(setEmotionResponse, 500);
          }
        });
      }
    }
  };
});
