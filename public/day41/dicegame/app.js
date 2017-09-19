/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var defender;
var attacker;
var point;
var attackerDice = [];
var totalPointAttacker;

var attackerForce;
var defenderForce;

var attackerRemaining = document.querySelector('.attackerRemaining');
var defenderRemaining = document.querySelector('.defenderRemaining');



document.querySelector('.btn-force').addEventListener('click', function(){
  var attackerInput = document.querySelector('.attackerArmy').value;
  var defenderInput = document.querySelector('.defenderArmy').value;

  attackerForce = attackerInput;
  defenderForce = defenderInput;

  attackerRemaining.textContent = `Remaining: ${attackerForce}`;
  defenderRemaining.textContent = `Remaining: ${defenderForce}`;
});


document.querySelector('.btn-roll').addEventListener('click', function(){


  //attacker
  var maxDice = 0;
  var secondMaxDice = 0;
  document.querySelector('.attackerFirstDice').src = '';
  document.querySelector('.attackerSecondDice').src = '';
  document.querySelector('.attackerThirdDice').src = '';
  document.querySelector('.defenderFirstDice').src = '';
  document.querySelector('.defenderSecondDice').src = '';


  //reset
  attackerDice = [];

  if(attackerForce > 0){
    point = Math.floor((Math.random() * 6) + 1);
    attackerDice.push(point);
    var diceDom =  document.querySelector('.attackerFirstDice');
    diceDom.src = `img/dice-${point}.png`;
  }

  if(attackerForce > 1){
    point = Math.floor((Math.random() * 6) + 1);
    attackerDice.push(point);
    var diceDom =  document.querySelector('.attackerSecondDice');
    diceDom.src = `img/dice-${point}.png`;
  }

  if(attackerForce > 2){
    point = Math.floor((Math.random() * 6) + 1);
    attackerDice.push(point);
    var diceDom =  document.querySelector('.attackerThirdDice');
    diceDom.src = `img/dice-${point}.png`;
  }



  // Calculate max and second max dice
  for(var i = 0; i < attackerDice.length; i++){
    if(attackerDice[i] > maxDice){
      secondMaxDice = maxDice;
      maxDice = attackerDice[i];
    }else if(attackerDice[i] > secondMaxDice){
      secondMaxDice = attackerDice[i];
    }
  }

  console.log('MaxDice = ' + maxDice + 'secondMaxDice = ' + secondMaxDice);

  //end of attacker


  //defender
  var firstDefend = 0;
  var secondDefend = 0;

  //reset
  defenderDice = [];

  if(defenderForce > 0){
    point = Math.floor((Math.random() * 6) + 1);
    defenderDice.push(point);
    var diceDom =  document.querySelector('.defenderFirstDice');
    diceDom.src = `img/dice-${point}.png`;
  }



  if(defenderForce > 1){
    point = Math.floor((Math.random() * 6) + 1);
    defenderDice.push(point);
    var diceDom =  document.querySelector('.defenderSecondDice');
    diceDom.src = `img/dice-${point}.png`;
  }


  // Calculate max and second max dice
  for(var i = 0; i < defenderDice.length; i++){
    if(defenderDice[i] > firstDefend){
      secondDefend = firstDefend;
      firstDefend = defenderDice[i];
    }else if(defenderDice[i] > secondDefend){
      secondDefend = defenderDice[i];
    }
  }

  console.log('First Defend = ' + firstDefend + 'Second Defend = ' + secondDefend);


  //end of defender

  resultCalculate(maxDice, secondMaxDice, firstDefend, secondDefend);

});

function resultCalculate(maxDice, secondMaxDice, firstDefend, secondDefend){
  var firstWave =  document.querySelector('.firstWave');
  var secondWave =  document.querySelector('.secondWave');
  var result =  document.querySelector('.result');

  if((attackerForce > 0) && (defenderForce > 0) && (maxDice != 0) && (firstDefend != 0)){
    if(maxDice > firstDefend){
      firstWave.textContent = `Attacker break through the first defend line (Attack: ${maxDice} vs Defend: ${firstDefend}, attack side win)`;
      defenderForce -= 1;
      defenderRemaining.textContent = `Remaining: ${defenderForce}`;
    }else{
      firstWave.textContent = `First defend line fight to death!Arrrrrrrrr! (Attack: ${maxDice} vs Defend: ${firstDefend}, defend side win)`;
      attackerForce -= 1;
      attackerRemaining.textContent = `Remaining: ${attackerForce}`;
    }
    if((secondMaxDice != 0) && (secondDefend != 0) && (defenderForce >= 1) && (attackerForce >= 1)){
      if(secondMaxDice > secondDefend){
        secondWave.textContent = `Attacker break through the defender backup force (Attack: ${secondMaxDice} vs Defend: ${secondDefend}, attack side win)`;
        defenderForce -= 1;
        defenderRemaining.textContent = `Remaining: ${defenderForce}`;
      }else{
        secondWave.textContent = `Second defend line fight to death!Arrrrrrrrr! (Attack: ${secondMaxDice} vs Defend: ${secondDefend}, defend side win)`;
        attackerForce -= 1;
        attackerRemaining.textContent = `Remaining: ${attackerForce}`;
      }
    }else{
      secondWave.textContent = '';
    }




  }else if(attackerForce === 0){
    firstWave.textContent = ``;
    secondWave.textContent = '';
    result.textContent = 'Defender Win!!!';
  }else if(defenderForce === 0){
    firstWave.textContent = ``;
    secondWave.textContent = '';
    result.textContent = 'Attacker Win!!!';
  }

}


// var scores, roundScore, activePlayer, gamePlaying, saveSlot, savable;
//
// init();
//
//
// document.querySelector('.btn-roll').addEventListener('click', function(){
//
//     if(gamePlaying){
//
//         console.log(saveSlot);
//
//         savable = true;
//
//         //1. Random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//         var dice2 = Math.floor(Math.random() * 6) + 1;
//         //var dice = 6;
//
//         //2. Display the result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';
//
//         var diceDOM = document.querySelector('.dice2');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice2 + '.png';
//
//
//
//         //3. Update the round score IF the rolled number was NOT a 1
//         if(dice !== 1 & dice2 !==1 ){
//
//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//
//             //Challenges 1
//             if(dice === 6 && saveSlot === 6){
//                 scores[activePlayer] = 0;
//
//                  // Update the UI
//                 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//
//                 //console.log("your scores now is " + scores[activePlayer]);
//                 nextPlayer();
//
//             }
//         }
//
//         else{
//             //Next Player
//           nextPlayer();
//
//
//     //document.querySelector('.player-0-panel').classList.remove('active');
//     //document.querySelector('.player-1-panel').classList.add('active');
//         }
//
//          //4. save the dice amount
//         if(savable){
//             saveSlot = dice;
//         }else{
//             saveSlot = 0;
//         }
//
//
//     }
//
//
// });
//
//
// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if(gamePlaying){
//          // Add Current score to GLOBAL score
//         scores[activePlayer] += roundScore;
//
//
//         // Update the UI
//         document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];
//
//         // Check if player won the game
//         if(scores[activePlayer] >= document.getElementById('textbox').value){
//             document.getElementById('name-'+activePlayer).textContent = 'Winner';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         }else{
//             //Next player
//             nextPlayer();
//         }
//
//
//
//     }
//
//
//
// });
//
// function nextPlayer(){
//      //Next Player
//         if(activePlayer === 0){
//             activePlayer = 1;
//         }else{
//             activePlayer = 0;
//         }
//         roundScore = 0;
//         saveSlot = 0;
//         savable = false;
//
//         document.getElementById('current-0').textContent = '0';
//         document.getElementById('current-1').textContent = '0';
//
//         document.querySelector('.player-0-panel').classList.toggle('active');
//         document.querySelector('.player-1-panel').classList.toggle('active');
//
//         document.querySelector('.dice').style.display = 'none';
// }
//
// document.querySelector('.btn-new').addEventListener('click', init);
//
// function init(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;
//     saveSlot = 0;
//
//     document.querySelector('.dice').style.display = 'none';
//
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player1';
//     document.getElementById('name-1').textContent = 'Player2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
//
//
// }




//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
