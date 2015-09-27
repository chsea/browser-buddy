app.config(function ($stateProvider) {
  $stateProvider.state('createBuddy', {
    url: '/create-buddy',
    templateUrl: '/js/create-buddy/create-buddy.html',
    controller: 'CreateBuddyController',
  });
}).controller('CreateBuddyController', function($scope, Buddy){
  $scope.happy = '';

  $scope.add = () => {
    Buddy.create({
      name: $scope.name,
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
