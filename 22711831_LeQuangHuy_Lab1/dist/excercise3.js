"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    carInfor() {
        console.log(`brand: ${this.brand}\nmodel: ${this.model}\nyear: ${this.year}`);
    }
}
exports.default = Car;
