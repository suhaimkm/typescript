function oddeven(n) {
    var remainder = n % 2;
    if (remainder == 0) {
        console.log("".concat(n, " is a even number "));
    }
    else {
        console.log(" ".concat(n, " is a odd number "));
    }
}
oddeven(7);
