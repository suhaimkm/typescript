const numbers :number[] = [3, 5, 7, 9];
let sum :number = numbers.reduce((n:number, total:number) => n + total, 0);
console.log(`sum =${sum}`);

let product:number = numbers.reduce((product:number, n:number) => product * n);
console.log(`product =${product}`);




