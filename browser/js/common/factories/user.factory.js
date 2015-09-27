app.factory('UserFactory', function($http) {

  function save(newUser) {
    return $http.post('/api/user/signup', newUser)
      .then(function(user) {
        return user.data;
      });
  }

  function getUser(userId) {
    return $http.get('/api/user/' + userId)
      .then(function(user) {
        return user.data;
      });
  }

  function getAllUsers() {
    return $http.get('/api/user')
      .then(function(response) {
        return response.data;
      });
  }

  function deleteUser(userId) {
    return $http.delete('/api/user/' + userId)
      .then(function(response) {
        return response.data;
      });
  }

  function updateUser(user) {
    return $http.put('/api/user/' + user._id, user)
      .then(function(response) {
        return response.data;
      });
  }


return {
    save: save,
    getUser: getUser,
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
    updateUser: updateUser
  };
});