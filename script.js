class Animal{
    constructor(species){
        this._species=species;
    }
    get species(){
         return this._species;
     }
    makeSound(){
        console.log(this._species+" animal makes sound");
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