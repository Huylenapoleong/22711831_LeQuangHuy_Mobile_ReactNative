"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.area = 0;
        this.perimeter = 0;
    }
    Area() {
        this.area = this.width * this.height;
        return this.area;
    }
    Perimeter() {
        this.perimeter = (this.width + this.height) * 2;
        return this.perimeter;
    }
}
exports.default = Rectangle;
