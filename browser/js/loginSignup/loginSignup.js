app.config(function ($stateProvider) {

    $stateProvider.state('loginSignup', {
        url: '/login',
        templateUrl: 'js/loginSignup/loginSignup.html',
        controller: 'LoginSignupCtrl'
    });

});

app.controller('LoginSignupCtrl', function ($rootScope, AUTH_EVENTS, $scope, AuthService, $state, User) {

    $scope.login = {};
    $scope.loginError = null;
    $scope.signupError = null;

  //   $scope.validateForm = function() {
  //   var x = document.forms['signupForm', 'email'].value;
  //   // console.log(x);
  // }

    $scope.sendLogin = function (loginInfo) {

        $scope.loginError = null;

        AuthService.login(loginInfo)
        .then(function () {
            $state.go('selectBuddy');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };



  $scope.createUser = function(userInfo) {
    $scope.signupError = null;
    User.create(userInfo)
    .then(function() {
        $state.go('selectBuddy');
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }).catch(function() {
        $scope.signupError = 'User already exists';
      });
  };

});
