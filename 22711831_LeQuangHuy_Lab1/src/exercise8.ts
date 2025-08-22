export default class Product{
    public name: string;
    public price: number;
    constructor( name: string,price: number)
    {
       this.name=name;
       this.price=price;
    }
    display()
    {
        console.log(`ten san pham:${this.name}--gia thanh:${this.price}`);
        
    }
}

export class ManagerProduct{
    private products: Product[] = [];

    addProduct(Product:Product): void{
       this.products.push(Product)
    }
    filterExpensive(): Product[] {
        return this.products.filter(p => p.price > 100);
    }
     displayAll(): void {
        this.products.forEach(p => p.display());
    }
}
