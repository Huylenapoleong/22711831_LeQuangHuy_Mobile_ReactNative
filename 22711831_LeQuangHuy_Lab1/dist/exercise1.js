"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    displayInfo() {
        console.log(`name: ${this.name}\nage: ${this.age}`);
    }
}
exports.default = Person;
