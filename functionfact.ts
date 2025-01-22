let ans :number = fact(4);
console.log(ans);

function fact(n :number):number {
    let factorial:number = 1;
    for (let i :number= n; i >= 1; i--) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}
