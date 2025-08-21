import Person from "./exercise1"
import Student from "./exercise2";
import Car from "./excercise3";
import Rectangle from "./excercise4";
import BankAccount from "./excercise5";
import Book from "./excercise6";
import { User } from "./excercise7";
import Product, { ManagerProduct } from "./exercise8";
console.log("//---------------------bài1--------------------------")//--------------------bài1---------------------------
let person1 = new Person("Lê Quang Huy",17);
person1.displayInfo()
console.log("//---------------------bài2--------------------------")//---------------------bài2--------------------------
let student1 = new Student("Lê Quang Huy",17,8);
student1.displayAllInfo()
console.log("//---------------------bài3--------------------------")//---------------------bài3--------------------------
let car1 = new Car("Honda","RX-125",2023);
car1.carInfor()
console.log("//---------------------bài4--------------------------")//---------------------bài4--------------------------
let hcn1 = new Rectangle(4,5);
console.log(`area of hcn1 : ${hcn1.Area()}`);
console.log(`Perimeter of hcn1 : ${hcn1.Perimeter()}`);
console.log("//---------------------bài5--------------------------")//---------------------bài5--------------------------
let Huyaccount = new BankAccount("1237679",10000)
console.log(Huyaccount);
console.log("Le Quang Huy Deposit 500");
Huyaccount.Deposit(500);
console.log(`Your balance current: ${Huyaccount.Balance}`);
console.log("Le QuangHuy Drew 10000");
Huyaccount.WithDraw(10000);
console.log(`Your balance current: ${Huyaccount.Balance}`);
console.log("//---------------------bài6--------------------------")//---------------------bài6--------------------------
let newbook = new Book("Nghìn Lẻ Một Đêm","Lê Quang Huy",2004);
console.log(newbook);
console.log("//---------------------bài7--------------------------")//---------------------bài7--------------------------
let user1 = new User("LeQuangHuy");
console.log(user1.getName());
console.log("//---------------------bài8--------------------------")//---------------------bài8--------------------------
const manager = new ManagerProduct();

manager.addProduct(new Product("Sách", 50));
manager.addProduct(new Product("Điện thoại", 120));
manager.addProduct(new Product("Laptop", 1000));
manager.addProduct(new Product("Bút", 20));

console.log("Tất cả sản phẩm:");
manager.displayAll();

console.log("\nSản phẩm giá > 100:");
manager.filterExpensive().forEach(p => p.display());





