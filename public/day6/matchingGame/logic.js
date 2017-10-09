$(document).ready(function(){

  var secondClick = false;
  var firstClick = false;
  var score = 0;
  var number1;
  var number2;
  var id1;
  var id2;

  var row = 5;
  var column = 6;

  var space = [];

  $('#output').html('');

  for(var i = 0; i < row; i++){
    $('#output').prepend(`<div class="row" id="row${i}"></div>`);
    for(var x = 0; x < column; x++){
      space.push(Math.floor((Math.random() * 3)));
      $('#row' + i).prepend(`<button class="btn btn-primary tic selectButton" id="${i * column + x}" value="${space[i * column + x]}">
      <span id="${i * column + x}">${space[i * column + x]}</span></button>`);
      setTimeout(function(){$("span").text("X");}, 500);
    }
  }
  $('#score').html('');
  $('#score').prepend(`<p>Score = ${score}</p>`);

  $('.selectButton').click(function(){
        if(!firstClick){
          firstClick = true;
          number1 = $(this).val();

          id1 = $(this).attr('id');
          $("span", this).text(number1);
        }else if(!secondClick){
          secondClick = true;
          number2 = $(this).val();

          id2 = $(this).attr('id');
          $("span", this).text(number2);
          nextTurn(number1 === number2, id1, id2);
        }

  });





  //
  // $('.selectButton').click(function(){
  //
  //     if(!firstChecked){
  //       number1 = $(this).val();
  //       console.log("NUMBER 1" + number1);
  //       var id1 = $(this).attr('id');
  //       firstChecked = true;
  //       $("span", this).text(number1);
  //     }
  //
  //     console.log(secondClick);
  //     $('.selectButton').click(function(){
  //         if(secondClick === false){
  //           secondClick = true;
  //           number2 = $(this).val();
  //           console.log("NUMBER 2" + number1);
  //           // $("span", this).text(number2);
  //           var id2 = $(this).attr('id');
  //           nextTurn(number1 === number2, id1, id2);
  //         }
  //     });
  //
  // });


  function nextTurn(match, id1, id2){
    if(match){

      // $("#1").text("My NEW Text");
      $('#'+id1).removeClass("btn-primary selectButton").off('click');
      $('#'+id2).removeClass("btn-primary selectButton").off('click');
      score += 100;
      $('#score').html('');
      $('#score').prepend(`<p>Score = ${score}</p>`);
      setTimeout(function(){
          resetgame(match);
        }, 2000);
    }else{
      setTimeout(function(){
          resetgame(match);
        }, 2000);
    }
  }



  function resetgame(win){
    if(win){
      $("span", '#'+id1).text("O");
      $("span", '#'+id2).text("O");
    }else{
      $("span", '#'+id1).text("X");
      $("span", '#'+id2).text("X");
    }

    number1 = '';
    number2 = '';
    secondClick = false;
    firstClick = false;

  }











});
