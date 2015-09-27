app.directive('hangout', function(EmotionResponseFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/hangout/hangout.html',
    link: scope => {
      var vid = document.getElementById('user-video');
      var overlay = document.getElementById('overlay');
      var overlayCC = overlay.getContext('2d');
      var vidStream;

      var getStream = () => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

        if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, function(stream) {
            vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
            vidStream = stream;
          }, function() {
            alert("Let me record you!");
          });
        }
      };

      /*********** setup of emotion detection *************/
      var ctrack = new clm.tracker({useWebGL: true});
      ctrack.init(pModel);
      var eClassifier = new emotionClassifier();
      eClassifier.init(emotionModel);
      var emotionData = eClassifier.getBlank();
      var emotionLoopInterval;

      scope.startVideo = () => {
        getStream();
        vid.play();
        ctrack.start(vid);
        $('#overlay').show();
        drawLoop();
        emotionLoopInterval = setInterval(emotionLoop, 3000);
      };

      var can = document.getElementById('snapshot');
      scope.stopVideo = () => {
        $('#overlay').hide();
        ctrack.stop();
        clearInterval(emotionLoopInterval);
        vidStream.getVideoTracks()[0].stop();
      };

      var drawLoop = () => {
        requestAnimFrame(drawLoop);
        overlayCC.clearRect(0, 0, 400, 300);
        if (ctrack.getCurrentPosition()) ctrack.draw(overlay);
      };

      var emotionLoop = () => {
        var cp = ctrack.getCurrentParameters();
        var eResponse = eClassifier.meanPredict(cp);
        if (eResponse) {
          console.log(eResponse[3].value);
          // EmotionResponseFactory.setEmotion(eResponse[3].value, eResponse[1].value);
          // setInterval(() => {
          //   // scope.$digest();
          //   scope.emotion = EmotionResponseFactory.howDoYouFeel();
          // }, 500);
          // can.getContext("2d").drawImage(vid, 0, 0, 400, 300, 0, 0, 400, 300);
          // var img = can.toDataURL();
          // $('#duck').attr('src', img);
          // var response;
          // setInterval(() => scope.$apply(() => {
          //   response = scope.buddy.responses[$scope.emotion];
          //   if (response) {
          //   	scope.buddyResponse = response.text;
          //     scope.imgSrc = response.pictureUrl;
          //     var speak = new Howl({
          //       urls: [response.audioUrl]
          //     }).play();
          //   } else {
          //     scope.imgSrc = buddy.defaultPicture;
          //   }
          // }), 3000);
        }
      };
    }
  };
});
