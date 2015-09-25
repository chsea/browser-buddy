app.factory('BuddyFactory', function($http) {

  function getBuddies() {
    return $http.get('/api/buddy')
      .then(function(response) {
        return response.data;
      })
  }

  function getOneBuddy(id) {
    console.log("we're here")
    return $http.get('/api/buddy/' + id)
      .then(function(response) {
        console.log(response)
        return response.data;
      })
  }

  function addBuddy(buddyToCreate) {
    return $http.post('/api/createStore', buddyToCreate)
     .then(function(response) {
        return response.data;
      })
  }

  function deleteBuddy(id) {
    return $http.delete('/api/buddy/' + id)
      .then(function(response) {
        return response.data;
      })
  }


  function updateBuddy(updatedBuddy, id) {
    return $http.put('/api/buddy/' + id, updatedBuddy)
      .then(function(response) {
        return response.data;
      })
  }



  return {
    getBuddies: getBuddies,
    getOneBuddy: getOneBuddy,
    addBuddy: addBuddy,
    deleteBuddy: deleteBuddy,
    updateBuddy: updateBuddy
  }
})