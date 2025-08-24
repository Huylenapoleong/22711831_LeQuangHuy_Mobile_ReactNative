class Product26 {
  constructor(public name: string, public price: number) {}
}

export class Order26 {
  private products: Product26[] = [];

  addProduct(product: Product26): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  listProducts(): void {
    console.log(" Products in Order:");
    this.products.forEach(p => console.log(`- ${p.name}: ${p.price} VND`));
  }
}
