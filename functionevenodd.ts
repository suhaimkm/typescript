
function oddeven(n:number) {
    let remainder : Number = n % 2;
    if (remainder == 0) {
        console.log(`${n} is a even number `);
    } else {
        console.log(` ${n} is a odd number `);
    }

}
oddeven(7);