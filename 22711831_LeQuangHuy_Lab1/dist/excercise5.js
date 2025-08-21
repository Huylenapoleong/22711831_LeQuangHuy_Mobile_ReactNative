"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(BankAccountID, Balance) {
        this.Balance = Balance;
        this.BankAccountID = BankAccountID;
    }
    Deposit(amount) {
        if (amount <= 0) {
            console.log(" deposit amount  unvalid");
            return;
        }
        else {
            this.Balance += amount;
        }
    }
    WithDraw(amount) {
        if (this.Balance < 0 || this.Balance == 0 || this.Balance < amount) {
            console.log("dont enough money in Balance");
            return;
        }
        else {
            this.Balance -= amount;
        }
    }
}
exports.default = BankAccount;
