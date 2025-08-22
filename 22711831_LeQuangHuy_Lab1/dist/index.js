"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const excercise7_1 = require("./excercise7");
const exercise8_1 = __importStar(require("./exercise8"));
const dog_imple_x9_1 = __importDefault(require("./dog_imple_x9"));
const exercise10_1 = __importDefault(require("./exercise10"));
const exercise11_1 = require("./exercise11");
const exercise12_1 = require("./exercise12");
const exercise13_1 = require("./exercise13");
const exercise14_1 = require("./exercise14");
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
console.log("//---------------------bài7--------------------------"); //---------------------bài7--------------------------
let user1 = new excercise7_1.User("LeQuangHuy");
console.log(user1.getName());
console.log("//---------------------bài8--------------------------"); //---------------------bài8--------------------------
const manager = new exercise8_1.ManagerProduct();
manager.addProduct(new exercise8_1.default("Sách", 50));
manager.addProduct(new exercise8_1.default("Điện thoại", 120));
manager.addProduct(new exercise8_1.default("Laptop", 1000));
manager.addProduct(new exercise8_1.default("Bút", 20));
console.log("Tất cả sản phẩm:");
manager.displayAll();
console.log("\nSản phẩm giá > 100:");
manager.filterExpensive().forEach(p => p.display());
console.log("//---------------------bài9--------------------------"); //---------------------bài9--------------------------
let dog1 = new dog_imple_x9_1.default("Big Pull");
console.log(dog1.getname());
dog1.sound();
console.log("//---------------------bài10--------------------------"); //---------------------bài10--------------------------
const myAccount = new exercise10_1.default("Alice", "AC123456", 1000);
console.log(myAccount.ownerName);
console.log(myAccount.getBalance());
myAccount.deposit(500);
console.log(myAccount.getBalance());
// myAccount.accountNumber="1934802"; saiiii
console.log("//---------------------bài11--------------------------"); //---------------------bài11--------------------------
const myDog = new exercise11_1.Dogg("BacRe");
myDog.makeSound();
myDog.bark();
const myCat = new exercise11_1.Cat("Huy");
myCat.makeSound();
myCat.meow();
console.log("//---------------------bài12--------------------------"); //---------------------bài12--------------------------
const eagle = new exercise12_1.Bird("Na");
eagle.fly();
const salmon = new exercise12_1.Fish("Huy");
salmon.swim();
console.log("//---------------------bài13--------------------------"); //---------------------bài13--------------------------
const square = new exercise13_1.Square(5);
console.log("Square area:", square.area());
const circle = new exercise13_1.Circle(3);
console.log("Circle area:", circle.area());
console.log("//---------------------bài14--------------------------"); //---------------------bài14--------------------------
const developer = new exercise14_1.Developer("Huy", 102, "TypeScript");
developer.displayInfo();
developer.writeCode();
const managerr = new exercise14_1.Manager("Na", 101, 5);
managerr.displayInfo(); // Employee: Alice, ID: 101
managerr.conductMeeting();
