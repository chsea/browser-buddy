app.config(function ($stateProvider) {
  $stateProvider.state('selectBuddy', {
    url: '/',
    templateUrl: '/js/select-buddy/select-buddy.html',
    controller: 'SelectBuddyController',
    resolve: {
      user: AuthService => AuthService.getLoggedInUser(),
      buddies: Buddy => Buddy.findAll({}, {bypassCache: true})
    }
  });
}).controller('SelectBuddyController', function($scope, $state, buddies, user){
  $scope.buddies = buddies.filter(buddy => !buddy.creator || buddy.creator == user._id);
  $scope.role = '';

	$scope.chooseBuddy = () => {
    $scope.currentBuddy = _.find(buddies, (buddy) => buddy._id == $scope.buddy);
    $state.go('hangout', {id: $scope.buddy});
  };

  $scope.sayGreeting = function(selectedBuddy){
    $scope.greeter = _.find(buddies, (buddy) => buddy._id == selectedBuddy._id);
    $scope.buddy = $scope.greeter._id;
    if ($scope.greeter !== $scope.selectedBuddy) {
      if ($scope.greeter.greeting) {
        var greet = new Howl({urls: [$scope.greeter.greeting]}).play();
      } else {
        meSpeak.loadConfig("/js/lib/mespeak/mespeak_config.json");
        meSpeak.loadVoice("/js/lib/mespeak/en.json");
        meSpeak.speak(`I'm your custom buddy ${$scope.greeter.name}!`);
      }
    }
    $scope.selectedBuddy = $scope.greeter;
  };
});
