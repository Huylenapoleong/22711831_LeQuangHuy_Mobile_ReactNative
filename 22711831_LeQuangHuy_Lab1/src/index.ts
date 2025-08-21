import Person from "./exercise1"
import Student from "./exercise2";
import Car from "./excercise3";
import Rectangle from "./excercise4";
import BankAccount from "./excercise5";
import Book from "./excercise6";
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




