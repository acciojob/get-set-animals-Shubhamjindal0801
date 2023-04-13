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
    bark(){
        console.log("Woof");
    }
}

class Cat extends Animal{
    purr(){
        console.log("purr");
    }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;