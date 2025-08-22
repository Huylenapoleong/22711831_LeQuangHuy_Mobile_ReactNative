"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dogg = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dogg extends Animal {
    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dogg = Dogg;
class Cat extends Animal {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat = Cat;
