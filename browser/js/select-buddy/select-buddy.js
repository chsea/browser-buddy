app.config(function ($stateProvider) {
  $stateProvider.state('selectBuddy', {
    url: '/',
    templateUrl: '/js/select-buddy/select-buddy.html',
    controller: 'SelectBuddyController',
    resolve: {
      buddies: (Buddy) => Buddy.findAll()
    }
  });
}).controller('SelectBuddyController', function($scope, $state, buddies, Buddy, $rootScope){
  $scope.buddies = buddies;
	var currentBuddy;
	$scope.chooseBuddy = function(){
		buddyId = $scope.buddy;
    currentBuddy = _.find(buddies, (buddy) => buddy._id == buddyId);
  };
});
