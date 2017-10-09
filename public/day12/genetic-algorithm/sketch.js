// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// Demonstration of using a genetic algorithm to perform a search

// setup()
//  # Step 1: The Population
//    # Create an empty population (an array or ArrayList)
//    # Fill it with DNA encoded objects (pick random values to start)

// draw()
//  # Step 1: Selection
//    # Create an empty mating pool (an empty ArrayList)
//    # For every member of the population, evaluate its fitness based on some criteria / function,
//      and add it to the mating pool in a manner consistant with its fitness, i.e. the more fit it
//      is the more times it appears in the mating pool, in order to be more likely picked for reproduction.

//  # Step 2: Reproduction Create a new empty population
//    # Fill the new population by executing the following steps:
//       1. Pick two "parent" objects from the mating pool.
//       2. Crossover -- create a "child" object by mating these two parents.
//       3. Mutation -- mutate the child's DNA based on a given probability.
//       4. Add the child object to the new population.
//    # Replace the old population with the new population
//
//   # Rinse and repeat


var target = [];
var popmax;
var mutationRate;
var population;

var bestPhrase;
var allPhrases;
var stats;

var input;

var redInput;
var greenInput;
var blueInput;
var populationText;
var generationText;

function setup() {

  redInput = select('#redInput');
  greenInput = select('#greenInput');
  blueInput = select('#blueInput');
  populationText = select('#population');
  generationText = select('#generation');
  output = select('#output');


  populationText = createP("Population Amount:");
  generationText = createP("Generation taken:");
  //bestPhrase.position(10,10);


  // allPhrases = createP("All phrases:");
  // allPhrases.position(600,10);
  // allPhrases.class("all");

  // stats = createP("Stats");
  // //stats.position(10,200);
  // stats.class("stats");

  createCanvas(1040, 960);
  target = [10, 90, 90];

  popmax = 200;
  mutationRate = 0.01;

  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(target, mutationRate, popmax);
}

function keyPressed() {

  if (keyCode === RETURN) {
    population = null;
    createCanvas(1040, 960);


    target = [redInput.value(), greenInput.value(), blueInput.value()];


    popmax = 200;
    mutationRate = 0.01;

    // Create a population with a target phrase, mutation rate, and population max
    population = new Population(target, mutationRate, popmax);
  }

}


function draw() {
  if(population){
    if(!population.isFinished()){

      // Generate mating pool
      population.naturalSelection();
      //Create next generation
      population.generate();
      // Calculate fitness
      population.calcFitness();

      population.evaluate();

      // If we found the target phrase, stop
      // if (population.isFinished() && population.getAverageFitness() > 0.65) {
      //   //println(millis()/1000.0);
      //   noLoop();
      // }

      displayInfo();
    }

    function displayInfo() {
      // Display current status of population
      var answer = population.getBest();

      //bestPhrase.html("Best phrase:<br>" + answer);
      output.html('Answer: ' + answer);
      populationText.html('Population: ' + popmax)
      generationText.html('Generation: ' + population.getGenerations())



      if(redInput.value() >= 100){
        var v1 = answer.substring(0,3);
        answer = answer.slice(3);
      }else if(redInput.value() >= 10){
        var v1 = answer.substring(0,2);
        answer = answer.slice(2);
      }else{
        var v1 = answer.substring(0,1);
        answer = answer.slice(1);
      }

      if(greenInput.value() >= 100){
        var v2 = answer.substring(0,3);
        answer = answer.slice(3);
      }else if(greenInput.value() >= 10){
        var v2 = answer.substring(0,2);
        answer = answer.slice(2);
      }else{
        var v2 = answer.substring(0,1);
        answer = answer.slice(1);
      }

      if(blueInput.value() >= 100){
        var v3 = answer.substring(0,3);
        answer = answer.slice(3);
      }else if(blueInput.value() >= 10){
        var v3 = answer.substring(0,2);
        answer = answer.slice(2);
      }else{
        var v3 = answer.substring(0,1);
        answer = answer.slice(1);
      }


      fill(v1,v2,v3);
      ellipse(56, 46, 55, 55);

      var populationColor = population.allPhrases();

      var x = 56;
      var y = 46;


      for(var i = 0; i < populationColor.length; i++){
        var s1 = populationColor[i].substring(0,2);
        var s2 = populationColor[i].substring(2,4);
        var s3 = populationColor[i].substring(4,6);
        fill(s1,s2,s3);
        x += 40;

        if(i % 20 == 0){
          y += 45;
          x = 56;
        }


        ellipse(56 + x, 46 + y, 30, 35);



      }





      // var statstext = "total generations:     " + population.getGenerations() + "<br>";
      // statstext +=    "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
      // statstext +=    "total population:      " + popmax + "<br>";
      // statstext +=    "mutation rate:         " + floor(mutationRate * 100) + "%";

      // stats.html(statstext);

      //allPhrases.html("All phrases:<br>" + population.allPhrases())


    }
  }

}
