var ans = fact(4);
console.log(ans);
function fact(n) {
    var factorial = 1;
    for (var i = n; i >= 1; i--) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}
