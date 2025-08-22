class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

export class Dogg extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

export class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} says: Meow!`);
  }
}
