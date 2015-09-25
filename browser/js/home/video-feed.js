app.directive('videoFeed', function(EmotionResponseFactory, $scope) {
  return {
    restrict: 'E',
    templateUrl: 'js/home/video-feed.html',
    link: (scope, e, a, rootscope) => {
      var vid = document.getElementById('videoel');
      var overlay = document.getElementById('overlay');
      var overlayCC = overlay.getContext('2d');

      function enablestart() {
        var startbutton = document.getElementById('startbutton');
        startbutton.value = "start";
        startbutton.disabled = null;
      }
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

      if (navigator.getUserMedia) {
        var videoSelector = { video: true };
        if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
          var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
          if (chromeVersion < 20) {
            videoSelector = "video";
          }
        }

        navigator.getUserMedia(videoSelector, function(stream) {
          if (vid.mozCaptureStream) {
            vid.mozSrcObject = stream;
          } else {
            vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
          }
          vid.play();
        }, function() {
          //insertAltVideo(vid);
          alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
        });
      } else {
        //insertAltVideo(vid);
        alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
      }

      vid.addEventListener('canplay', enablestart, false);

      /*********** setup of emotion detection *************/

      var ctrack = new clm.tracker({ useWebGL: true });
      ctrack.init(pModel);

      scope.startVideo = function() {
        // start video
        vid.play();
        // start tracking
        ctrack.start(vid);
        // start loop to draw face
        drawLoop();
      };
      scope.val = null;
      rootscope.emotion = null;
      rootscope.lastChanged = new Date();
      function drawLoop() {
        requestAnimFrame(drawLoop);
        overlayCC.clearRect(0, 0, 400, 300);
        if (ctrack.getCurrentPosition()) {
          ctrack.draw(overlay);
        }
        var cp = ctrack.getCurrentParameters();
        var eResponse = eClassifier.meanPredict(cp);
        if (eReponse) {
          EmotionResponseFactory.setEmotion(eReponse[3].value, eResponse[1].value);
          if (rootscope.emotion != EmotionResponseFactory.howDoYouFeel()) {
            if (new Date() - rootscope.lastChanged > 10000) {
              rootscope.emotion = EmotionResponseFactory.howDoYouFeel();
              rootscope.$broadcast(EmotionResponseFactory.howDoYouFeel());
              rootscope.lastChanged = new Date();
            }
          }
        }
      }

      var eClassifier = new emotionClassifier();
      eClassifier.init(emotionModel);
      var emotionData = eClassifier.getBlank();
    }
  };
});
