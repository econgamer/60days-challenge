$( document ).ready(function() {



  //messageArea, username, userForm, users, userFormArea

  var $questionArea = $('#questionArea');
  var $questionform = $('#questionform');

  var $sceneArea = $('#sceneArea');

  var name;
  var drunk;

  setTimeout(scene1, 1000);


  function scene1(){
    $sceneArea.html('<h1 class="animated fadeIn">Hi, I am tester.</h1>');
    setTimeout(function(){ $sceneArea.html('<h1 class="animated fadeIn">What is your name?</h1> '); }, 1500);
    setTimeout(function(){ $questionform.html('<input class="animated fadeIn" type="text" id="name" name="name" value=""></input> '); }, 1500);
  }


  function scene2(){
    setTimeout(function(){ $sceneArea.html('<h1 class="animated fadeIn">1 + 1?</h1> '); }, 1500);
    setTimeout(function(){ $questionform.html('<input class="animated fadeIn" type="text" id="answer1" name="answer1" value=""></input> '); }, 1500);
  }

  function scene3(){
    setTimeout(function(){ $sceneArea.html('<h1 style="color: red;" class="animated fadeIn">What is the text color?</h1> '); }, 1500);
    setTimeout(function(){ $questionform.html('<input class="animated fadeIn" type="text" id="answer2" name="answer2" value=""></input> '); }, 1500);
  }

  function scene4(){
    setTimeout(function(){ $sceneArea.html('<h1 class="animated fadeIn">Are you a male or female?</h1> '); }, 1500);
    setTimeout(function(){ $questionform.html('<input class="animated fadeIn" type="radio" name="gender" id="male" value="male" checked> <p class="animated fadeIn">Male </p><br> <input class="animated fadeIn" type="radio" name="gender" id="female" value="female"> <p class="animated fadeIn">Female </p><br> <input class="animated fadeIn" type="radio" name="gender" id="neither" value="neither"> <p class="animated fadeIn">I am not drunk! </p>  <button class="animated fadeIn" type="submit" name="submit">Submit</button> '); }, 1500);
  }

  function scene5(){
    setTimeout(function(){ $sceneArea.html(`<h1 class="animated fadeIn">${drunk}</h1> `); }, 2000);
    setTimeout(function(){ $questionform.html(''); }, 2000);

  }




  //userForm submit
  $questionArea.submit(function(e){
    e.preventDefault();
    console.log('Username submit');


    if($('#name').val() != null){
      name = $('#name').val();
      $sceneArea.html('<h1 class="animated fadeOut">What is your name?</h1> ');
      $questionform.html('<input class="animated fadeOut" type="text" id="name" name="name" value=""></input> ');
      setTimeout(scene2, 1500);
    }


    if($('#answer1').val() != null){
      console.log($('#answer1').val());
      if($('#answer1').val() === '2'){
        $sceneArea.html('<h1 class="animated fadeOut">1 + 1?</h1> ');
        $questionform.html('<input class="animated fadeOut" type="text" id="answer1" name="answer1" value=""></input> ');
        setTimeout(scene3, 1500);
      }
    }


    if($('#answer2').val() != null){
      console.log($('#answer2').val());
      if($('#answer2').val() === 'red'){
        $sceneArea.html('<h1 style="color: red;" class="animated fadeOut">What is the text color?</h1> ');
        $questionform.html('<input class="animated fadeOut" type="text" id="answer2" name="answer2" value=""></input> ');
        setTimeout(scene4, 1500);
      }
    }


    if($('input:checked').val()  != null){


      if($('input:checked').val() === 'neither'){
        $sceneArea.html('<h1 class="animated fadeOut">Are you a male or female?</h1> ');
        $questionform.html('<input class="animated fadeOut" type="radio" name="gender" id="male" value="male" checked> <p class="animated fadeOut">Male </p><br> <input class="animated fadeOut" type="radio" name="gender" id="female" value="female"> <p class="animated fadeOut">Female </p><br> <input class="animated fadeOut" type="radio" name="gender" id="neither" value="neither"> <p class="animated fadeOut">I am not drunk! </p>  <button class="animated fadeOut" type="submit" name="submit">Submit</button> ');
        drunk = name + ', you are drunk!'
      }else{
        $sceneArea.html('<h1 class="animated fadeOut">Are you a male or female?</h1> ');
        $questionform.html('<input class="animated fadeOut" type="radio" name="gender" id="male" value="male" checked> <p class="animated fadeOut">Male </p><br> <input class="animated fadeOut" type="radio" name="gender" id="female" value="female"> <p class="animated fadeOut">Female </p><br> <input class="animated fadeOut" type="radio" name="gender" id="neither" value="neither"> <p class="animated fadeOut">I am not drunk! </p>  <button class="animated fadeOut" type="submit" name="submit">Submit</button> ');
        drunk = name + ', you are not drunk!'
      }


      setTimeout(scene5, 1500);

    }



  });



});
