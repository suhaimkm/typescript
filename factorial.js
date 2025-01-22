var n = 5;
var factorial = 1;
for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log("factorial of ".concat(n, " = ").concat(factorial));
