var product = /** @class */ (function () {
    function product(n, p, q) {
        this.name = n;
        this.price = p;
        this.quantity = q;
    }
    product.prototype.printdetails = function () {
        console.log("Product Name:".concat(this.name));
        console.log("Product price:".concat(this.price));
        console.log("Product quantity:".concat(this.quantity));
    };
    product.prototype.printtotalvalue = function () {
        console.log("the total value of ".concat(this.name, " is $").concat(this.price * this.quantity));
    };
    product.prototype.restock = function (newstock) {
        console.log("existing quantity ".concat(this.quantity));
        this.quantity = this.quantity + newstock;
        console.log("new quantity ".concat(this.quantity));
    };
    product.prototype.applydiscount = function (dis) {
        console.log("before discount: ".concat(this.price));
        var discount = this.price * (dis / 100);
        this.price = this.price - discount;
        console.log("after discount: ".concat(this.price));
    };
    return product;
}());
var p = new product('apple', 100, 5);
var p1 = new product('banana', 200, 10);
var p2 = new product('orange', 300, 15);
p.printdetails();
p.printtotalvalue();
p.restock(5);
p.applydiscount(10);
