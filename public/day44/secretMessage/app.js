

document.querySelector('.btn-encode').addEventListener('click', function(data){

  var secretMessage = document.querySelector('.secret').value;
  var output = document.querySelector('.output');
  var b64 = btoa(secretMessage);
  output.textContent = b64;
  document.querySelector('.secret').value = '';
});

document.querySelector('.btn-decode').addEventListener('click', function(data){

  var secretMessage = document.querySelector('.secret').value;
  var output = document.querySelector('.output');
  var unicode = atob(secretMessage);
  output.textContent = unicode;
  document.querySelector('.secret').value = '';
});
