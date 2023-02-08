function fizzBuzz(num) {
    let i = 0;
    while(i < num) {
        if((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
            console.log(i);
        }
        i += 1;
    }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9