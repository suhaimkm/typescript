var rectangle = /** @class */ (function () {
    function rectangle(l, b) {
        this.length = l;
        this.breadth = b;
    }
    rectangle.prototype.printarea = function () {
        console.log("Area of rectangle is:".concat(this.length * this.breadth));
    };
    rectangle.prototype.printperimeter = function () {
        console.log("Perimeter of rectangle is: ".concat(2 * (this.length + this.breadth)));
    };
    return rectangle;
}());
var rect = new rectangle(5, 6);
var rect2 = new rectangle(7, 8);
rect.printarea();
rect.printperimeter();
rect2.printarea();
rect2.printperimeter();
