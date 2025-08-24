import Person from "./exercise1"
import Student from "./exercise2";
import Car from "./excercise3";
import Rectangle from "./excercise4";
import BankAccount from "./excercise5";
import Book from "./excercise6";
import { User } from "./excercise7";
import Product, { ManagerProduct } from "./exercise8";
import Dog from "./dog_imple_x9"; 
import Account from "./exercise10";
import { Dogg,Cat } from "./exercise11";
import { Fish,Bird } from "./exercise12";
import { Circle,Square } from "./exercise13";
import { Manager,Developer } from "./exercise14";
import { Employee } from "./exercise14";
import { Library, User15 } from "./exercise15";
import { Box1 } from "./exercise16";
import { Logger } from "./exercise17";
import { MathUtil } from "./exercise18";
import { Animal19,Dog19,Cat19 } from "./exercise19";
import { Bike19, Car19 } from "./exercise20";
import { Repository } from "./exercise21";
import { Stack } from "./exercise22";
import { CardPayment23, CashPayment23 } from "./exercise23";
import { AirConditioner, Fan } from "./exercise24";
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
console.log("//---------------------bài9--------------------------")//---------------------bài9--------------------------
let dog1 = new Dog("Big Pull")
console.log(dog1.getname());
dog1.sound()
console.log("//---------------------bài10--------------------------")//---------------------bài10--------------------------
const myAccount = new Account("Alice", "AC123456", 1000);
console.log(myAccount.ownerName);  
console.log(myAccount.getBalance());   
myAccount.deposit(500);
console.log(myAccount.getBalance());    
// myAccount.accountNumber="1934802"; saiiii
console.log("//---------------------bài11--------------------------")//---------------------bài11--------------------------
const myDog = new Dogg("BacRe");
myDog.makeSound(); 
myDog.bark();     
const myCat = new Cat("Huy");
myCat.makeSound(); 
myCat.meow();      
console.log("//---------------------bài12--------------------------")//---------------------bài12--------------------------
const eagle = new Bird("Na");
eagle.fly(); 
const salmon = new Fish("Huy");
salmon.swim(); 
console.log("//---------------------bài13--------------------------")//---------------------bài13--------------------------
const square = new Square(5);
console.log("Square area:", square.area()); 
const circle = new Circle(3);
console.log("Circle area:", circle.area());
console.log("//---------------------bài14--------------------------")//---------------------bài14--------------------------
const developer = new Developer("Huy", 102, "TypeScript");
developer.displayInfo();     
developer.writeCode();      
const managerr = new Manager("Na", 101, 5);
managerr.displayInfo();       
managerr.conductMeeting();
console.log("//---------------------bài15--------------------------")//---------------------bài15--------------------------
const library = new Library();
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const book2 = new Book("Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn", 2016);
library.addBook(book1);
library.addBook(book2);
const user11 = new User15("Nguyễn Văn A");
const user22 = new User15("Trần Thị B");
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
console.log("//---------------------bài16--------------------------")//---------------------bài16--------------------------
const numberBox = new Box1<number>(123);
console.log(numberBox.getValue()); 
const stringBox = new Box1<string>("Hello");
console.log(stringBox.getValue()); 
const objectBox = new Box1<{ name: string; age: number }>({ name: "Lan", age: 22 });
console.log(objectBox.getValue()); 
console.log("//---------------------bài17--------------------------")//---------------------bài17--------------------------
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Ứng dụng đã khởi động");
logger2.error("Lỗi kết nối cơ sở dữ liệu");
console.log("Hai logger có cùng instance:", logger1 === logger2)
console.log("//---------------------bài18--------------------------")//---------------------bài18--------------------------
console.log(MathUtil.add(10, 5));       
console.log(MathUtil.subtract(10, 5));  
console.log(MathUtil.multiply(10, 5));  
console.log(MathUtil.divide(10, 5));    
console.log("//---------------------bài19--------------------------")//---------------------bài19--------------------------
const animals: Animal19[] = [new Dog19(), new Cat19(), new Animal19()];
for (const animal of animals) {
  animal.makeSound();
}
console.log("//---------------------bài20--------------------------")//---------------------bài20--------------------------
const myCar = new Car19("Toyota", "Camry");
const myBike = new Bike19("Yamaha", "Sport");
myCar.startEngine();
console.log(myCar.getInfo());
myCar.stopEngine();
myBike.startEngine();
console.log(myBike.getInfo());
myBike.stopEngine();
console.log("//---------------------bài21--------------------------")//---------------------bài21--------------------------
const stringRepo = new Repository<string>();
stringRepo.add("Xin chào");
stringRepo.add("TypeScript");
console.log(stringRepo.getAll());
const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll());
console.log("//---------------------bài22--------------------------")//---------------------bài22--------------------------
const stack = new Stack<number>();
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
console.log("//---------------------bài23--------------------------")//---------------------bài23--------------------------
const cash = new CashPayment23();
const card = new CardPayment23("1234-5678-9012-3456");
cash.pay(500000);  
card.pay(1200000);
console.log("//---------------------bài24--------------------------")//---------------------bài24--------------------------
const myFan = new Fan();
const myAC = new AirConditioner();

myFan.turnOn();  
myAC.turnOn();   

