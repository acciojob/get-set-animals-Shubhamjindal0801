class Animal{
    constructor(species){
        this.species=species;
    }
    // get species(){
    //     return this.species;
    // }
    makeSound(){
        console.log(this.species+" animal makes sound");
    }
}

class Dog extends Animal{
    constructor(species){
        super(species);
    }
    bark(){
        console.log("Woof");
    }
}

class Cat extends Animal{
    constructor(species){
        super(species);
    }
    purr(){
        console.log("purr");
    }
}

var cat = new Cat("Kitty");
console.log(cat.makeSound())
console.log(cat.purr())
var dog = new Dog("Ligar");
console.log(dog.makeSound())
console.log(dog.bark())