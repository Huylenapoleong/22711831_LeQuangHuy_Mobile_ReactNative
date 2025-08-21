"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, year) {
        this.author = author;
        this.title = title;
        this.year = year;
    }
    deployInfor() {
        console.log(`author: ${this.author}\ntitle: ${this.title}\nyear: ${this.year}`);
    }
}
exports.default = Book;
