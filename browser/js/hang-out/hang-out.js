app.config(function ($stateProvider) {
  $stateProvider.state('hangOut', {
    url: '/hangout',
    templateUrl: '/js/hang-out/hang-out.html',
    controller: 'MainController',
    resolve: {
      buddies: (Buddy) => Buddy.findAll()
    }
  });
}).controller('MainController', function($scope, $state, buddies, Buddy, $rootScope){
  var response;
  setInterval(() => $scope.$apply(() => {
    response = currentBuddy ? currentBuddy.responses[$scope.emotion] : null;
    if (response) {
    	$scope.buddyResponse = response.text;
      $scope.imgSrc = response.pictureUrl;
      console.log(response.audioUrl);
      var speak = new Howl({
        urls: [response.audioUrl]
      }).play();
    } else {
      $scope.imgSrc = currentBuddy.defaultPicture;
    }
  }), 3000);
	var buddyId;
  $scope.buddies = buddies;
	var currentBuddy;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
    currentBuddy = _.find(buddies, (buddy) => buddy._id == buddyId);
    console.log(`hi ${currentBuddy.firstName}`);
  };
});
