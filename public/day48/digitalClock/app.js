var currentHours;
var currentMinutes;
var currentSeconds;
var alarmHour;
var alarmMin;
var alarmSet = false;
var alarmSound;
var alarmList = [];
var alarmDisplay = document.querySelector('.alarmDisplay');

getTime();
startUp();

function getTime(){
  var currentdate = new Date();
  var timeField = document.querySelector('.timeField');

  currentHours = currentdate.getHours();
  displayHours = ("0" + currentHours).slice(-2);

  currentMinutes = currentdate.getMinutes();
  displayMinutes = ("0" + currentMinutes).slice(-2);

  currentSeconds = currentdate.getSeconds();
  displaySeconds = ("0" + currentSeconds).slice(-2);


  // var datetime = currentdate.getDate() + "/"
  //         + (currentdate.getMonth()+1)  + "/"
  //         + currentdate.getFullYear() + " @ "
  //         + currentHours + ":"
  //         + currentMinutes + ":"
  //         + currentSeconds;

  timeField.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;

  checkAlarm();

}

function startUp(){
  var hour = 23;
  var min = 59;
  var alarmHourDoc = document.querySelector('.alarmHour');
  var alarmMinDoc = document.querySelector('.alarmMin');

  for(var i = 0; i <= hour; i++){
    alarmHourDoc.innerHTML += `<option value="${i}">${i}</option>`;
  }

  for(var i = 0; i <= min; i++){
    alarmMinDoc.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

function checkAlarm(){
  if(alarmList.length > 0){

    for(var i = 0; i < alarmList.length; i++){
      if((parseInt(alarmList[i].alarmHour) ===  currentHours) && (parseInt(alarmList[i].alarmMin) === currentMinutes) ){


        alarmList.splice(i,1);
        alarmSound = document.getElementById("myAudio");
        alarmSound.play();


        document.querySelector('.btn-stopAlarm').style.display = "block";

        checkDisplay();
      }
    }

  }
}



document.querySelector('.btn-stopAlarm').addEventListener('click', function(){
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.querySelector('.btn-stopAlarm').style.display = "none";
});



document.querySelector('.btn-setAlarm').addEventListener('click', function(){
  alarmHour = document.querySelector('.alarmHour').value;
  alarmMin = document.querySelector('.alarmMin').value;
  alarmList.push({alarmHour, alarmMin});

  alarmSet = true;


  checkDisplay();
});


function checkDisplay(){
  alarmDisplay.innerHTML = '';
  if(alarmList.length > 0){
    for(var i = 0; i < alarmList.length; i++){

      var displayAlarmHour = ("0" + alarmList[i].alarmHour).slice(-2);
      var displayAlarmMin = ("0" + alarmList[i].alarmMin).slice(-2);

      alarmDisplay.innerHTML += `<p>${displayAlarmHour}:${displayAlarmMin}</p>`;
    }
  }else{
    alarmDisplay.innerHTML = '';
  }
}


setInterval(getTime, 1000);
