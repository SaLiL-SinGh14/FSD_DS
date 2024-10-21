let arr = [1, 23, 4, 55, 6, 54]
let newary = arr.map((x) => x * 2);
console.log(newary);
let even = arr.filter((x) => x % 2 == 0);
console.log(even);
let sum = arr.reduce((x, y) => x + y, 0);
console.log(sum);
let result = arr
    .filter((x) => x % 2 == 0)
    .reduce((x, y) => x + y, 0);
console.log(result);