"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.User15 = exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
exports.Book = Book;
class User15 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
exports.User15 = User15;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    getBooks() {
        return this.books;
    }
    getUsers() {
        return this.users;
    }
}
exports.Library = Library;
