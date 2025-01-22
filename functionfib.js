function fib(n) {
    var first = 1;
    var second = 1;
    console.log(first);
    console.log(second);
    for (var i = 1; i <= n - 2; i++) {
        var sum = first + second;
        console.log(sum);
        first = second;
        second = sum;
    }
}
fib(7);
