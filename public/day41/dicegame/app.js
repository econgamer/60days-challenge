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


  //end of defender

  resultCalculate(maxDice, secondMaxDice, firstDefend, secondDefend);

});

function resultCalculate(maxDice, secondMaxDice, firstDefend, secondDefend){
  var firstWave =  document.querySelector('.firstWave');
  var secondWave =  document.querySelector('.secondWave');
  var result =  document.querySelector('.result');
  result.textContent = '';

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
