app.config(function ($stateProvider) {
  $stateProvider.state('createBuddy', {
    url: '/create-buddy',
    templateUrl: '/js/create-buddy/create-buddy.html',
    controller: 'CreateBuddyController',
    resolve: {
      user: (AuthService) => AuthService.getLoggedInUser()
    }
  });
}).controller('CreateBuddyController', function($scope, Buddy, user, FileUploadFactory){
  var happyPic = document.getElementById('happy-pic');
  happyPic.addEventListener('change', e => FileUploadFactory.upload(happyPic, e).then(() => console.log('uploaded!')));

  $scope.add = () => {
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
    .then(() => console.log('created'));
  };
});
