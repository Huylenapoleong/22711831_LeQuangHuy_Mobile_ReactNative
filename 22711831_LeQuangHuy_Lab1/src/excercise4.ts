export default class Rectangle{

    public width: number;
    public height: number;
    public area:number;
    public perimeter:number;
     constructor(width: number,height: number)
     {
        this.height=height;
        this.width=width;
        this.area=0;
        this.perimeter=0;
     }
    Area()
    {
        this.area = this.width*this.height;
        return this.area;
    }
    Perimeter()
    {
        this.perimeter = (this.width+this.height)*2;
        return this.perimeter;
    }
}