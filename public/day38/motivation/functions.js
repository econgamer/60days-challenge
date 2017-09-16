// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $(window).scroll(function(){
      var farFromTop = $(this).scrollTop();

      console.log(farFromTop);

      $('.fore-char').css({
        'transform': 'translate(0px, -' + farFromTop / 100 + '%)'
      });



      // if(farFromTop > 500){
      //   $('.fore-char3').css({
      //     'transform': 'translate(0px, -' + (farFromTop/70) + '%)'
      //   });
      // }

      // if(farFromTop<900){
      //   $('.fore-char3').css({
      //     'transform': 'translate(0px, ' - (farFromTop - 900)  + 'px)'
      //   });
      //
      //   console.log('run again');
      // }



      if(farFromTop < 900){
        $('#quote1').css({
          'transform': 'translate(0px, ' + farFromTop / 2 + 'px)'
        });

      }else if(farFromTop >= 900 && farFromTop < 2700){
        $('#quote2').css({
          'transform': 'translate(0px, ' + (farFromTop/2 - 450)  + 'px)'
        });

        $('.fore-char2').css({
          'transform': 'translate(0px, -' + farFromTop / 150 + '%)'
        });

        console.log('run!');
      }






    });
});
