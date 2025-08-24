"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat19 = exports.Dog19 = exports.Animal19 = void 0;
class Animal19 {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
exports.Animal19 = Animal19;
class Dog19 extends Animal19 {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
exports.Dog19 = Dog19;
class Cat19 extends Animal19 {
    makeSound() {
        console.log("Meow");
    }
}
exports.Cat19 = Cat19;
