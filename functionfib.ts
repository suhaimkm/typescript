
function fib(n:number):void{
    let first : number = 1;
    let second : number = 1;
    console.log(first);
    console.log(second);

    for (let i : number = 1; i <= n - 2; i++) {
        let sum : number = first + second;
        console.log(sum);
        first = second;
        second = sum;
    }
}


fib(7);
