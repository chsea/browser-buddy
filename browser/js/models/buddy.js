app.factory('Buddy', function(DS) {
  return DS.defineResource({
    name: 'buddy',
  });
}).run(function(Buddy) {});
