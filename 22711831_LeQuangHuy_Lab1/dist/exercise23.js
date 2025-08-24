"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment23 = exports.CashPayment23 = void 0;
class CashPayment23 {
    pay(amount) {
        console.log(`Thanh toán tiền mặt: ${amount} VND`);
    }
}
exports.CashPayment23 = CashPayment23;
class CardPayment23 {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Thanh toán bằng thẻ ${this.cardNumber}: ${amount} VND`);
    }
}
exports.CardPayment23 = CardPayment23;
