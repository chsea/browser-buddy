app.config(function ($stateProvider) {
  $stateProvider.state('hangout', {
    url: '/hangout/:id',
    templateUrl: '/js/hangout/index.html',
    controller: 'HangoutController',
    resolve: {
      buddy: (Buddy, $stateParams) => Buddy.find($stateParams.id)
    }
  });
}).controller('HangoutController', function($scope, $state, buddy, $rootScope){
  $scope.buddy = buddy;
});
