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
cat.makeSound()
cat.purr();
var dog = new Dog("Ligar");
dog.makeSound()
dog.bark()