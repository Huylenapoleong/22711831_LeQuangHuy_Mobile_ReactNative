"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./exercise1"));
const exercise2_1 = __importDefault(require("./exercise2"));
const excercise3_1 = __importDefault(require("./excercise3"));
const excercise4_1 = __importDefault(require("./excercise4"));
const excercise5_1 = __importDefault(require("./excercise5"));
const excercise6_1 = __importDefault(require("./excercise6"));
console.log("//---------------------bài1--------------------------"); //--------------------bài1---------------------------
let person1 = new exercise1_1.default("Lê Quang Huy", 17);
person1.displayInfo();
console.log("//---------------------bài2--------------------------"); //---------------------bài2--------------------------
let student1 = new exercise2_1.default("Lê Quang Huy", 17, 8);
student1.displayAllInfo();
console.log("//---------------------bài3--------------------------"); //---------------------bài3--------------------------
let car1 = new excercise3_1.default("Honda", "RX-125", 2023);
car1.carInfor();
console.log("//---------------------bài4--------------------------"); //---------------------bài4--------------------------
let hcn1 = new excercise4_1.default(4, 5);
console.log(`area of hcn1 : ${hcn1.Area()}`);
console.log(`Perimeter of hcn1 : ${hcn1.Perimeter()}`);
console.log("//---------------------bài5--------------------------"); //---------------------bài5--------------------------
let Huyaccount = new excercise5_1.default("1237679", 10000);
console.log(Huyaccount);
console.log("Le Quang Huy Deposit 500");
Huyaccount.Deposit(500);
console.log(`Your balance current: ${Huyaccount.Balance}`);
console.log("Le QuangHuy Drew 10000");
Huyaccount.WithDraw(10000);
console.log(`Your balance current: ${Huyaccount.Balance}`);
console.log("//---------------------bài6--------------------------"); //---------------------bài6--------------------------
let newbook = new excercise6_1.default("Nghìn Lẻ Một Đêm", "Lê Quang Huy", 2004);
console.log(newbook);
