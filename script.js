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
const cat = new Cat("Kitty")
cat.makeSound();
cat.purr();
const dog = new Dog("Ligar")
dog.makeSound();
dog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
