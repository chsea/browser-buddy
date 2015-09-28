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
  $scope.role = '';
  $scope.selectedBuddy;

	$scope.chooseBuddy = () => {
    $scope.currentBuddy = _.find(buddies, (buddy) => buddy._id == $scope.buddy);
    $state.go('hangout', {id: $scope.buddy});
  };

  $scope.sayGreeting = function(selectedBuddy){
    $scope.greeter = _.find(buddies, (buddy) => buddy._id == selectedBuddy._id);
    if ($scope.greeter !== $scope.selectedBuddy){
      var greet = new Howl({urls: [$scope.greeter.greeting]}).play();
      } 
    $scope.selectedBuddy = $scope.greeter;
  };
});
