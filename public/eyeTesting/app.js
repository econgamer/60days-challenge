

var words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w'
,'x','y','z'];

var randomNumber = 0;

var displayArea = document.querySelector('.displayArea');


var startTest;
var testOutput = document.querySelector('.testOutput');

document.querySelector('.changeButton').addEventListener('click', function(){
  clearInterval(startTest);


});


document.querySelector('.changeButton').addEventListener('click', function(){
  var fontInput = parseInt(document.querySelector('.fontSize').value);
  var timeInput = parseInt(document.querySelector('.timeGap').value) * 1000;
  var caseStyle = document.querySelector('.caseStyle').value;
  var fontStyle = document.querySelector('.fontStyle').value;

  testOutput.textContent = '';




    startTest = setInterval(function(){

    randomNumber = Math.floor((Math.random() * 26));

    if(caseStyle === 'upper'){
      displayArea.innerHTML = `<p>${words[randomNumber].toUpperCase()}</p>`
    }else{
      displayArea.innerHTML = `<p>${words[randomNumber].toLowerCase()}</p>`
    }



    displayArea.style.fontFamily = `${fontStyle}`;

    displayArea.style.fontSize = `${fontInput}px`;


   }, timeInput);



});


function sizeTest(){


  var fontInput = parseInt(document.querySelector('.fontSize').value);
  testOutput.style.fontSize = `${fontInput}px`;
  testOutput.textContent = 'A';
}
