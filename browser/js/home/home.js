app.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: 'MainController',
    resolve: {
    	theBuddy: function(BuddyFactory){
    		return BuddyFactory.getBuddies();
    	}
    }
  });
});


app.controller('MainController', function($scope, BuddyFactory, theBuddy, $state){

	var buddyId;
	$scope.buddies = theBuddy;
	$scope.currentBuddy;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
		console.log(buddyId);
		$scope.currentBuddy = BuddyFactory.getOneBuddy(buddyId);
		}
	});







