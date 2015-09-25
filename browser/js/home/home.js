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
}).controller('MainController', function($scope, BuddyFactory, theBuddy, $state, buddies, Buddy){
	var buddyId;
	// $scope.buddies = theBuddy;
  $scope.buddies = buddies;
	$scope.currentBuddy = null;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
		console.log(buddyId);
		// $scope.currentBuddy = BuddyFactory.getOneBuddy(buddyId);
    $scope.currentBuddy = Buddy.find(buddyId);
  };
});
