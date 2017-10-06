$(document).ready(function() {
  var cheatHead = false;
  var cheatTail = false;
  var randomNum;

  $('.flip').click(function(){
    // $.stopSound();
    randomNum = Math.floor((Math.random() * 10) + 1);

    if(cheatHead){
      randomNum = Math.floor((Math.random() * 13) + 1);
      console.log("head hehe");
    }

    if(cheatTail){
      randomNum = Math.floor((Math.random() * 7) + 1);
      console.log("tail hehe");
    }

    console.log(randomNum);

    var audio = new Audio('coinflip.mp3');
    audio.play();
    // $.playSound('coinflip.mp3')



    if(randomNum > 5){
      $(".coinDisplay").attr("src","coinH.jpg");

    }else{
      $(".coinDisplay").attr("src","coinT.jpg");
    }



  });

  $(document).keypress(function(e) {
    //t = 116
    //h = 104
    console.log(e.which);
    if(e.which == 116) {
      cheatTail = true;
      cheatHead = false;
    }

    if(e.which == 104) {
      cheatTail = false;
      cheatHead = true;
    }

  });


});
