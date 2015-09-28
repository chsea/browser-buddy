app.factory('FileUploadFactory', function($http) {
  var duckface = img => $http.post('/api/upload/duckface', {data: img});

  var upload = (img, e) => {
    var file = img.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    return reader.onloadend = () => $http.post('/api/upload', {data: reader.result});
  };
  
  return {
    duckface: duckface,
    upload: upload
  };
});
