var book = /** @class */ (function () {
    function book(t, a, y) {
        this.title = t;
        this.author = a;
        this.year = y;
    }
    book.prototype.printbook = function () {
        console.log("the title of the book is ".concat(this.title, " , the author is ").concat(this.author, " and the year of publication is ").concat(this.year));
    };
    return book;
}());
var mybook = new book("python programming", "mugni", 2020);
var mybook2 = new book("romeo and juliet", "arshad", 2025);
mybook.printbook();
mybook2.printbook();
