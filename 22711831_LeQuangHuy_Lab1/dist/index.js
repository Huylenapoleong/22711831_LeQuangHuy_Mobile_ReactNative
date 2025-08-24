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
const exercise15_1 = require("./exercise15");
const exercise16_1 = require("./exercise16");
const exercise17_1 = require("./exercise17");
const exercise18_1 = require("./exercise18");
const exercise19_1 = require("./exercise19");
const exercise20_1 = require("./exercise20");
const exercise21_1 = require("./exercise21");
const exercise22_1 = require("./exercise22");
const exercise23_1 = require("./exercise23");
const exercise24_1 = require("./exercise24");
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
managerr.displayInfo();
managerr.conductMeeting();
console.log("//---------------------bài15--------------------------"); //---------------------bài15--------------------------
const library = new exercise15_1.Library();
const book1 = new excercise6_1.default("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const book2 = new excercise6_1.default("Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn", 2016);
library.addBook(book1);
library.addBook(book2);
const user11 = new exercise15_1.User15("Nguyễn Văn A");
const user22 = new exercise15_1.User15("Trần Thị B");
library.addUser(user11);
library.addUser(user22);
console.log(" Danh sách sách trong thư viện:");
library.getBooks().forEach((book) => {
    console.log(`- ${book.title} (${book.year}) của ${book.author}`);
});
console.log("\n Danh sách người dùng:");
library.getUsers().forEach((user) => {
    console.log(`- ${user.name}`);
});
console.log("//---------------------bài16--------------------------"); //---------------------bài16--------------------------
const numberBox = new exercise16_1.Box1(123);
console.log(numberBox.getValue());
const stringBox = new exercise16_1.Box1("Hello");
console.log(stringBox.getValue());
const objectBox = new exercise16_1.Box1({ name: "Lan", age: 22 });
console.log(objectBox.getValue());
console.log("//---------------------bài17--------------------------"); //---------------------bài17--------------------------
const logger1 = exercise17_1.Logger.getInstance();
const logger2 = exercise17_1.Logger.getInstance();
logger1.log("Ứng dụng đã khởi động");
logger2.error("Lỗi kết nối cơ sở dữ liệu");
console.log("Hai logger có cùng instance:", logger1 === logger2);
console.log("//---------------------bài18--------------------------"); //---------------------bài18--------------------------
console.log(exercise18_1.MathUtil.add(10, 5));
console.log(exercise18_1.MathUtil.subtract(10, 5));
console.log(exercise18_1.MathUtil.multiply(10, 5));
console.log(exercise18_1.MathUtil.divide(10, 5));
console.log("//---------------------bài19--------------------------"); //---------------------bài19--------------------------
const animals = [new exercise19_1.Dog19(), new exercise19_1.Cat19(), new exercise19_1.Animal19()];
for (const animal of animals) {
    animal.makeSound();
}
console.log("//---------------------bài20--------------------------"); //---------------------bài20--------------------------
const myCar = new exercise20_1.Car19("Toyota", "Camry");
const myBike = new exercise20_1.Bike19("Yamaha", "Sport");
myCar.startEngine();
console.log(myCar.getInfo());
myCar.stopEngine();
myBike.startEngine();
console.log(myBike.getInfo());
myBike.stopEngine();
console.log("//---------------------bài21--------------------------"); //---------------------bài21--------------------------
const stringRepo = new exercise21_1.Repository();
stringRepo.add("Xin chào");
stringRepo.add("TypeScript");
console.log(stringRepo.getAll());
const numberRepo = new exercise21_1.Repository();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll());
console.log("//---------------------bài22--------------------------"); //---------------------bài22--------------------------
const stack = new exercise22_1.Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log("//---------------------bài23--------------------------"); //---------------------bài23--------------------------
const cash = new exercise23_1.CashPayment23();
const card = new exercise23_1.CardPayment23("1234-5678-9012-3456");
cash.pay(500000);
card.pay(1200000);
console.log("//---------------------bài24--------------------------"); //---------------------bài24--------------------------
const myFan = new exercise24_1.Fan();
const myAC = new exercise24_1.AirConditioner();
myFan.turnOn();
myAC.turnOn();
