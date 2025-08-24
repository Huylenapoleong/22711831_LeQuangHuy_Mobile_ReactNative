"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order26 = void 0;
class Product26 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order26 {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
    listProducts() {
        console.log(" Products in Order:");
        this.products.forEach(p => console.log(`- ${p.name}: ${p.price} VND`));
    }
}
exports.Order26 = Order26;
