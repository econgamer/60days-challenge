    var myText = document.getElementById('myText');



      var story = {
      "start": "#[hero:#name#]story#",
      "character": ["firefighter", "cop", "nurse", "king"],
      "name": ["Bobo", "Neenee", "Peter"],
      "adj": ["dark", "sleepy", "quiet", "powerful", "funny", "evil"],
      "events": ["reads a personal finance article", "goes to school by bus", "eats beans", "sleeps", "eats sausage"],
      "special": ["drank water", "meditated", "did creative work"],
      "so": ["has become a superman", "has become a batman", "yelled at work Arrrrrrrrrrrrrrrrrrrrrrrrrrrrr!"],
      "final": ["backed home", "cried", "slept", "laughted"],

      // "story": "A #adj# #hero.capitalize# fights the #adj# monster. Go #hero# go!",
      "story": "Once upon a time, there was a #adj# #character# named #hero#, <br><br> Every day, #hero# #events#. <br><br> One day, #hero# #special#. <br><br> Because of that, #hero# #so#. <br><br> Finally, #hero# #final#. "

    }


    function storyGenerate(){
      var grammar;
      grammar = tracery.createGrammar(story);

      var result = grammar.flatten("#start#");
      myText.innerHTML = result;
      speak();
    }






function checkCompatibilty () {
				if(!('speechSynthesis' in window)){
					alert('Your browser is not supported. If google chrome, please upgrade!!');
				}
			};

			checkCompatibilty();
      //
			// var voiceOptions = document.getElementById('voiceOptions');
			var volume = 0.5;
			var rate = 0.5;
			var pitch = 0.5;
      var synth = window.speechSynthesis;


			var voiceMap = [];

			function loadVoices () {
        synth.cancel();
				var voices = synth.getVoices();
				for (var i = 0; i < voices.length; i++) {
					var voice = voices[i];
					var option = document.createElement('option');
					option.value = voice.name;
					option.innerHTML = voice.name;
					// voiceOptions.appendChild(option);
					voiceMap[voice.name] = voice;


				};
			};

			synth.onvoiceschanged = function(e){
				loadVoices();
			};

      var sayTimeout = null;

			function speak () {

        if (speechSynthesis.speaking) {
          synth.cancel();


          if (sayTimeout !== null)
            clearTimeout(sayTimeout);

            sayTimeout = setTimeout(function () { speak(); }, 250);
        }else{
          var msg = new SpeechSynthesisUtterance();
  				msg.volume = volume;
  				//msg.voice = voiceMap[voiceOptions.value];
          msg.voice = speechSynthesis.getVoices()[1];

  				msg.rate = rate;
  				msg.Pitch = pitch;
  				msg.text = myText.innerHTML;
  				synth.speak(msg);
        }




			};
