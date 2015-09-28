app.factory('FileUploadFactory', function($http) {
  var duckface = img => $http.post('/api/upload/duckface', {data: img});

  var upload = (img, name, emotion) => {
    var file = img.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => $http.post('/api/upload', {data: reader.result, name: name, emotion: emotion});
  };

  return {
    duckface: duckface,
    upload: upload
  };
});
