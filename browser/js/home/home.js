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
    $scope.emotionValue = $scope.emotion;
  }, 100);
	var buddyId;
	// $scope.buddies = theBuddy;
  	$scope.buddies = buddies;
  	// $scope.emotion = $rootScope.emotion;
  	// $scope.hi = $rootScope.hi;
	$scope.currentBuddy = null;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
		console.log(buddyId);
		// $scope.currentBuddy = BuddyFactory.getOneBuddy(buddyId);
    // $scope.currentBuddy = Buddy.find(buddyId);
    $scope.currentBuddy = _.find(buddies, (buddy) => buddy._id == buddyId);
  };
});
