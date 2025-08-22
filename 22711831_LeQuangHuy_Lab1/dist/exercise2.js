"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./exercise1"));
class Student extends exercise1_1.default {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`name : ${this.name}\nage : ${this.age}\ngrade : ${this.grade} `);
    }
    methodpublic() {
        console.log("hello");
    }
}
exports.default = Student;
