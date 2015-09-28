app.factory('User', function(DS) {
  return DS.defineResource({
    name: 'user',
  });
}).run(function(User) {});
