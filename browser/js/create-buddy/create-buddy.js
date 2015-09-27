app.config(function ($stateProvider) {
  $stateProvider.state('createBuddy', {
    url: '/create-buddy',
    templateUrl: '/js/create-buddy/create-buddy.html',
    controller: 'CreateBuddyController',
  });
}).controller('CreateBuddyController', function($scope, Buddy){
  $scope.happy = '';

  $scope.add = () => {
    Buddy.create({happy: $scope.happy})
      .then(buddy => console.log('created'));
  };
});
