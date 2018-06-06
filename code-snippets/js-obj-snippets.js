// Building a simple Constructor

function Exercise(weight, reps, sets) {
  this.weight = weights;
  this.reps = reps;
  this.sets = sets;
}

function addExercise(){
  deadLift = new Exercise(225, 10, 4);
  squat = new Exercise(185, 10, 4);
  frontSquat = new Exercise(105, 10, 2)
}

// Method
function Pet(animal, age){
  this.animal = animal;
  this.age = age;
  this.speak = function(){
    msg = "..."
  }
}

kaylee = new Pet ("Dog", 4)
kaylee.speak();

// Prototype Pattern
function Pet(){
  Pet.prototype.name = "Penny";
  Pet.prototype.animal = "Dog";
  Pet.prototype.age = "8"
  Pet.prototype.goodDog = true;

};

var penny = new Pet()
