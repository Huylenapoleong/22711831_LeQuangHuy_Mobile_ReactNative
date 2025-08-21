import Person from "./exercise1";
export default class Student extends Person {
    public grade: number;
     constructor(name: string , age: number , grade:number)
     {
        super(name,age);
        this.grade= grade;
     }
     displayAllInfo(): void {
         console.log(`name : ${this.name}\nage : ${this.age}\ngrade : ${this.grade} `)
     }

}