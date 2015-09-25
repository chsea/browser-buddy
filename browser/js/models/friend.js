app.factory('Friend', function(DS) {
  return DS.defineResource({
    name: 'friends',
  });
}).run(function(Friend) {});
