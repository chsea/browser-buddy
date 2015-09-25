app.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: 'MainController',
    resolve: {
    	theBuddy: function(BuddyFactory){
    		return BuddyFactory.getBuddies();
    	},
      buddies: (Buddy) => Buddy.findAll()
    }
  });
}).controller('MainController', function($scope, BuddyFactory, theBuddy, $state, buddies, Buddy, $rootScope){
  setInterval(() => {
    console.log($scope.emotion);
    let response = currentBuddy ? currentBuddy.responses[$scope.emotion] : null;
    response = response? response.text : null;
    console.log(response);
  }, 100);
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
  let response = currentBuddy ? currentBuddy.responses[$scope.emotion] : null;
  response = response? response.text : 'null';
	$scope.buddyResponse = response;
});
