import Animal from "./exercise9";
export default class Dog implements Animal {
    public name:string = "";
    constructor(name:string)
    {
        this.setname(name);
    }
    setname(name: string): void {
        this.name =name;
    }
    getname(): string {
        return this.name;
    }
    sound(): void {
        console.log("gâu gâu haha");
        
    }
}