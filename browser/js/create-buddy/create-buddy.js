app.config(function ($stateProvider) {
  $stateProvider.state('createBuddy', {
    url: '/create-buddy',
    templateUrl: '/js/create-buddy/create-buddy.html',
    controller: 'CreateBuddyController',
    resolve: {
      user: (AuthService) => AuthService.getLoggedInUser()
    }
  });
}).controller('CreateBuddyController', function($scope, $state, Buddy, user, FileUploadFactory){
  var defaultPic = document.getElementById('default-pic');
  var happyPic = document.getElementById('happy-pic');
  var sadPic = document.getElementById('sad-pic');
  var veryHappyPic = document.getElementById('very-happy-pic');
  var verySadPic = document.getElementById('very-sad-pic');
  var duckFacePic = document.getElementById('duck-face-pic');

  $scope.add = () => {
    FileUploadFactory.upload(defaultPic, $scope.name, 'default');
    FileUploadFactory.upload(happyPic, $scope.name, 'happy');
    FileUploadFactory.upload(sadPic, $scope.name, 'sad');
    FileUploadFactory.upload(veryHappyPic, $scope.name, 'veryhappy');
    FileUploadFactory.upload(verySadPic, $scope.name, 'verysad');
    FileUploadFactory.upload(duckFacePic, $scope.name, 'duckface');
    Buddy.create({
      name: $scope.name,
      creator: user._id,
      description: $scope.description,
      role: 'Custom',
      responses: {
        happy: {
          text: $scope.happy
        },
        sad: {
          text: $scope.sad
        },
        veryHappy: {
          text: $scope.veryHappy
        },
        verySad: {
          text: $scope.verySad
        },
        duckFace: {
          text: $scope.duckFace
        }
      }
    })
    .then(() => $state.go('selectBuddy', {}, {refresh: true}));
  };
});
