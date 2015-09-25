app.directive('videoFeed', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/home/video-feed.html',
    link: (scope) => {
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
      function drawLoop() {
        requestAnimFrame(drawLoop);
        overlayCC.clearRect(0, 0, 400, 300);
        //psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
        if (ctrack.getCurrentPosition()) {
          ctrack.draw(overlay);
        }
        var cp = ctrack.getCurrentParameters();
        // scope.val = ec.predict()[0];
        var er = ec.meanPredict(cp);
        if (er) {
          console.log(er[0].value);
          //updateData(er);
          // for (var i = 0; i < er.length; i++) {
          //   if (er[i].value > 0.4) {
          //     document.getElementById('icon' + (i + 1)).style.visibility = 'visible';
          //   } else {
          //     document.getElementById('icon' + (i + 1)).style.visibility = 'hidden';
          //   }
          // }
        }
      }

      var ec = new emotionClassifier();
      ec.init(emotionModel);
      var emotionData = ec.getBlank();
    }
  };
});
