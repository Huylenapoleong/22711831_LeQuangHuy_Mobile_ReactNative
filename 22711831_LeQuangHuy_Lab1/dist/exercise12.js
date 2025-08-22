"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying high in the sky.`);
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming through the water.`);
    }
}
exports.Fish = Fish;
