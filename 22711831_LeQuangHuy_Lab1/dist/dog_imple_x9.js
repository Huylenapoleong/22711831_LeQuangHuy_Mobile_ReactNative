"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name) {
        this.name = "";
        this.setname(name);
    }
    setname(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
    sound() {
        console.log("gâu gâu haha");
    }
}
exports.default = Dog;
