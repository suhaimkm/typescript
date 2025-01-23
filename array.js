var numbers = [3, 5, 7, 9];
var sum = numbers.reduce(function (n, total) { return n + total; }, 0);
console.log("sum =".concat(sum));
var product = numbers.reduce(function (product, n) { return product * n; });
console.log("product =".concat(product));
