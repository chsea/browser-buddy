app.directive('videoFeed', function(EmotionResponseFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/hangout/video-feed.html',
    link: (scope) => {
      var vid = document.getElementById('videoel');
      var overlay = document.getElementById('overlay');
      var overlayCC = overlay.getContext('2d');
      var vidStream;

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
          vidStream = stream;
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

      //scope.greeting = "hi";

      scope.startVideo = function() {
        // start video
        vid.play();
        // start tracking
        ctrack.start(vid);
        // start loop to draw face
        drawLoop();
      };
        var can = document.getElementById('snapshot');
      console.log(can);

      scope.stopVideo = () => vidStream.stop();
      scope.val = null;
      scope.emotion = null;
      scope.lastChanged = new Date();
      function drawLoop() {
        requestAnimFrame(drawLoop);
        overlayCC.clearRect(0, 0, 400, 300);
        if (ctrack.getCurrentPosition()) {
          ctrack.draw(overlay);
        }
        var cp = ctrack.getCurrentParameters();
        var eResponse = eClassifier.meanPredict(cp);
        if (eResponse) {
          EmotionResponseFactory.setEmotion(eResponse[3].value, eResponse[1].value);
          setInterval(() => {
            // scope.$digest();
            scope.emotion = EmotionResponseFactory.howDoYouFeel();
          }, 500);
          if (scope.emotion != EmotionResponseFactory.howDoYouFeel()) {
            //if (new Date() - scope.lastChanged > 1000) {
              //scope.$broadcast(EmotionResponseFactory.howDoYouFeel());
              scope.lastChanged = new Date();
            //}
          }
          can.getContext("2d").drawImage(vid, 0, 0, 400, 300, 0, 0, 400, 300);
          var img = can.toDataURL();
          $('#duck').attr('src', img);
        }
      }

      var eClassifier = new emotionClassifier();
      eClassifier.init(emotionModel);
      var emotionData = eClassifier.getBlank();
    }
  };
});
