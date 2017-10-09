$(document).ready(function() {


  $('#search').click(function(){
    var searchDate = $('#searchDate').val();
    var searchCurrency = $('#searchCurrency').val();
    var searchAmount = $('#searchAmount').val();

    var url = `https://api.fixer.io/${searchDate}?base=${searchCurrency}`;

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
      
        $('#output').html("<tr> <th style='width: 100px;'>Currency</th> <th>Rate</th> </tr>");

        for(var fxRate in data.rates) {
            // $('#output').append(`<li>${fxRate}:${(data.rates[fxRate] * searchAmount).toFixed(5)}</li>`);

            $('#output').append(`<tr><td>${fxRate}</td> <td>${(data.rates[fxRate] * searchAmount).toFixed(5)}</td>`);

        }




      },
      error: function(e){
        alert("Error");
      }
    });

  });

  $('#searchDate').keypress(function(key){
    if(key.which === 13){
      $('#search').click();
    };
  })

  $('#searchCurrency').keypress(function(key){
    if(key.which === 13){
      $('#search').click();
    };
  })

  $('#searchAmount').keypress(function(key){
    if(key.which === 13){
      $('#search').click();
    };
  })


});
