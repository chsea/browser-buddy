app.config(function ($stateProvider) {
  $stateProvider.state('hangout', {
    url: '/hangout/:id',
    templateUrl: '/js/hangout/hangout.html',
    controller: 'HangoutController',
    resolve: {
      buddy: (Buddy, $stateParams) => Buddy.find($stateParams.id)
    }
  });
}).controller('HangoutController', function($scope, $state, buddy, $rootScope){
  let currentBuddy = buddy;
  var response;
  setInterval(() => $scope.$apply(() => {
    response = currentBuddy.responses[$scope.emotion];
    if (response) {
    	$scope.buddyResponse = response.text;
      $scope.imgSrc = response.pictureUrl;
      var speak = new Howl({
        urls: [response.audioUrl]
      }).play();
    } else {
      $scope.imgSrc = currentBuddy.defaultPicture;
    }
  }), 3000);
	var buddyId;
});
