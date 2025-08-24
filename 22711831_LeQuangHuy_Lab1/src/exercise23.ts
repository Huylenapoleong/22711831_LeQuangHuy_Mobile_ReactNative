interface Payment23 {
  pay(amount: number): void;
}

export class CashPayment23 implements Payment23 {
  pay(amount: number): void {
    console.log(`Thanh toán tiền mặt: ${amount} VND`);
  }
}

export class CardPayment23 implements Payment23 {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`Thanh toán bằng thẻ ${this.cardNumber}: ${amount} VND`);
  }
}
