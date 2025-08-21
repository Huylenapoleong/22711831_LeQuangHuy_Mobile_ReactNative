export default class Car{
    public brand: string;
    public model: string;
    public year: number;
    constructor(brand: string, model: string,year: number)
    {
       this.brand=brand;
       this.model=model;
       this.year=year;
    }
    carInfor()
    {
        console.log(`brand: ${this.brand}\nmodel: ${this.model}\nyear: ${this.year}`)
    }
}