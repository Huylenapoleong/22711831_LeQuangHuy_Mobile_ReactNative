export default class BankAccount{
    public BankAccountID : string;
    public Balance : number ; 
    constructor(BankAccountID : string, Balance : number)
    {
       this.Balance=Balance;
       this.BankAccountID=BankAccountID;
    }
     Deposit (amount:number) :void
    {
         if(amount<=0)
         {
            console.log(" deposit amount  unvalid");
            return;
         }else{
             this.Balance+=amount;
         }
    }
     WithDraw (amount:number): void {
         if(this.Balance<0||this.Balance==0||this.Balance<amount){
           console.log("dont enough money in Balance");
           return;
         }else{
            this.Balance-=amount;
         }
     }
}