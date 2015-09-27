app.config(function ($stateProvider) {
  $stateProvider.state('hangOut', {
    url: '/',
    templateUrl: 'js/hang-out/hang-out.html',
    controller: 'MainController',
    resolve: {
      buddies: (Buddy) => Buddy.findAll()
    }
  });
}).controller('MainController', function($scope, BuddyFactory, theBuddy, $state, buddies, Buddy, $rootScope){
  var response;
  setInterval(() => $scope.$apply(() => {
    response = currentBuddy ? currentBuddy.responses[$scope.emotion] : null;
    console.log(response);
  	$scope.buddyResponse = response ? response.text : null;
    $scope.imgSrc = response ? response.url : null;
  }), 100);
	var buddyId;
	// $scope.buddies = theBuddy;
  	$scope.buddies = buddies;
  	// $scope.emotion = $rootScope.emotion;
  	// $scope.hi = $rootScope.hi;
	var currentBuddy;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
		// $scope.currentBuddy = BuddyFactory.getOneBuddy(buddyId);
    // $scope.currentBuddy = Buddy.find(buddyId);
    currentBuddy = _.find(buddies, (buddy) => buddy._id == buddyId);
    console.log(`hi ${currentBuddy.firstName}`);
  };
});
