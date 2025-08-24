interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  getInfo(): string;
}

export class Car19 implements Vehicle {
  constructor(private brand: string, private model: string) {}

  startEngine(): void {
    console.log(`${this.brand} ${this.model} start.`);
  }

  stopEngine(): void {
    console.log(`${this.brand} ${this.model} engine stopp.`);
  }

  getInfo(): string {
    return `Car: ${this.brand} ${this.model}`;
  }
}

export class Bike19 implements Vehicle {
  constructor(private brand: string, private type: string) {}

  startEngine(): void {
    console.log(`${this.brand} ${this.type} bike started.`);
  }

  stopEngine(): void {
    console.log(`${this.brand} ${this.type} bike stopped.`);
  }

  getInfo(): string {
    return `Bike: ${this.brand} ${this.type}`;
  }
}
