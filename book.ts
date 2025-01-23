class book {
    title : string;
    author: string;
    year: number;

    constructor(t:string, a:string, y:number) {
        this.title = t;
        this.author = a;
        this.year = y;
    }

    printbook() :void {
        console.log(`the title of the book is ${this.title} , the author is ${this.author} and the year of publication is ${this.year}`);
    }

}
let mybook = new book("python programming", "mugni", 2020);
let mybook2 = new book("romeo and juliet", "arshad", 2025);

mybook.printbook();
mybook2.printbook();