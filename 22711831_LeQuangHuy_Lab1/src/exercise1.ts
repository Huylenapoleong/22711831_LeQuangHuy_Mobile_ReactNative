export default class Person {
    protected name: string;
    protected age: number;
    constructor(name: string,age: number)
    {
         this.age=age;
         this.name=name;
    }

    displayInfo()
    {
       console.log(`name: ${this.name}\nage: ${this.age}`);
    }
}