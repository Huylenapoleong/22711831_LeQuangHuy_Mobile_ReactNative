export class Animal19 {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

export class Dog19 extends Animal19 {
  override makeSound(): void {
    console.log("Woof! Woof!");
  }
}

export class Cat19 extends Animal19 {
  override makeSound(): void {
    console.log("Meow");
  }
}
