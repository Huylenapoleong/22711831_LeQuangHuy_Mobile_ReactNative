export default class Account {
  public ownerName: string;
  private balance: number;
  readonly accountNumber: string;

  constructor(ownerName: string, accountNumber: string, initialBalance: number) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}
