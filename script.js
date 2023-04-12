//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	get species(){
		return this.species
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("Woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
const myCat = new Cat("Felis catus");
console.log(myCat.species);   // prints "Felis catus"
myCat.makeSound();           // logs "The animal makes a sound"
myCat.purr();                // logs "purr"

const myDog = new Dog("Canis lupus familiaris");
console.log(myDog.species);   // prints "Canis lupus familiaris"
myDog.makeSound();           // logs "The animal makes a sound"
myDog.bark();       
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
