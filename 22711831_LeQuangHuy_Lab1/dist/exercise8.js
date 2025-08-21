"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerProduct = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`ten san pham:${this.name}--gia thanh:${this.price}`);
    }
}
exports.default = Product;
class ManagerProduct {
    constructor() {
        this.products = [];
    }
    addProduct(Product) {
        this.products.push(Product);
    }
    filterExpensive() {
        return this.products.filter(p => p.price > 100);
    }
    displayAll() {
        this.products.forEach(p => p.display());
    }
}
exports.ManagerProduct = ManagerProduct;
