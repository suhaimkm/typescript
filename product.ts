class product {
    name : string;
    price : number;
    quantity :number;

    constructor(n:string, p:number, q:number) {
        this.name = n;
        this.price = p;
        this.quantity = q;
    }

    printdetails():void {
        console.log(`Product Name:${this.name}`);
        console.log(`Product price:${this.price}`);
        console.log(`Product quantity:${this.quantity}`);

    }

    printtotalvalue() :void {
        console.log(`the total value of ${this.name} is $${this.price * this.quantity}`);
    }

    restock(newstock:number):void {
        console.log(`existing quantity ${this.quantity}`);
        this.quantity = this.quantity + newstock;  
        console.log(`new quantity ${this.quantity}`);
    }
    applydiscount(dis:number):void{
        console.log(`before discount: ${this.price}`);
        let discount = this.price *(dis/100);
        this.price = this.price - discount; 
        console.log(`after discount: ${this.price}`);

    }
}
let p = new product('apple', 100, 5);
let p1 = new product('banana', 200, 10);
let p2 = new product('orange', 300, 15);


p.printdetails();
p.printtotalvalue();
p.restock(5);
p.applydiscount(10);