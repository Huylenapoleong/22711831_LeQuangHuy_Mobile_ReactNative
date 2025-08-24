"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike19 = exports.Car19 = void 0;
class Car19 {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} start.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.model} engine stopp.`);
    }
    getInfo() {
        return `Car: ${this.brand} ${this.model}`;
    }
}
exports.Car19 = Car19;
class Bike19 {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    startEngine() {
        console.log(`${this.brand} ${this.type} bike started.`);
    }
    stopEngine() {
        console.log(`${this.brand} ${this.type} bike stopped.`);
    }
    getInfo() {
        return `Bike: ${this.brand} ${this.type}`;
    }
}
exports.Bike19 = Bike19;
