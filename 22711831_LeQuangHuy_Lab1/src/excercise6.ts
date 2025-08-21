export default class Book{
    public title : string;
    public author : string;
    public year : number;
    constructor(title : string,author : string,year : number)
    {
        this.author=author;
        this.title=title;
        this.year=year;
    }

    deployInfor()
    {
        console.log(`author: ${this.author}\ntitle: ${this.title}\nyear: ${this.year}`);
    }
}