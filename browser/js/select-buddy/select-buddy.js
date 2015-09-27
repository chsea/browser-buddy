app.config(function ($stateProvider) {
  $stateProvider.state('selectBuddy', {
    url: '/',
    templateUrl: '/js/select-buddy/select-buddy.html',
    controller: 'SelectBuddyController',
    resolve: {
      buddies: (Buddy) => Buddy.findAll()
    }
  });
}).controller('SelectBuddyController', function($scope, $state, buddies){
  $scope.buddies = buddies;
	$scope.chooseBuddy = () => {
    $scope.currentBuddy = _.find(buddies, (buddy) => buddy._id == $scope.buddy);
    $state.go('hangout', {id: $scope.buddy});
  };

  $scope.sayGreeting = function(buddy){
    $scope.greeter = _.find($scope.buddies, {_id: buddy._id}, $scope.greeter)
      var greet = new Howl({urls: [$scope.greeter.greeting]
        }).play();
  };

  $scope.filterByRole = function (role){
    $scope.buddies = buddies;
    if (role === 'All'){
      $scope.buddies = buddies;
      return;
    }
    $scope.buddies = _.filter($scope.buddies, {role: role}, $scope.buddies);
    $state.go('selectBuddy')
  }
  
});
