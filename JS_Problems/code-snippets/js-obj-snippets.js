// Building a simple Constructor

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
