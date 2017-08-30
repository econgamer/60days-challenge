$(document).ready(function() {

  var htmlValue = $('#html').val();
  var cssValue = $('#css').val();
  $('#output').html(htmlValue);
  $('#styleid').html(cssValue);

  $('#html').bind('input propertychange', function() {
      var htmlValue = $('#html').val();
      $('#output').html(htmlValue);

});

  $('#css').bind('input propertychange', function() {
      var cssValue = $('#css').val();
      $('#styleid').html(cssValue);
  });

  $(function() {
    $(".lined").linedtextarea(
      {selectedLine: 1}
    );
  });



});
