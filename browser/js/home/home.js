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
	$scope.buddies = theBuddy;
	
})



