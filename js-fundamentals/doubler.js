function doubler(numbers) {
    // your code here...
    let newArr = [];
    for(let i = 0; i < numbers.length; i++){
        newArr[i] = numbers[i] * 2;
    }
    return newArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]