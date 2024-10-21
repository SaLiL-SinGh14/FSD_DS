// let arr = [1, 23, 4, 55, 6, 54]
// let newary = arr.map((x) => x * 2);
// console.log(newary);
// let even = arr.filter((x) => x % 2 == 0);
// console.log(even);
// let sum = arr.reduce((x, y) => x + y, 0);
// console.log(sum);
// let result = arr
//     .filter((x) => x % 2 == 0)
//     .reduce((x, y) => x + y, 0);
// console.log(result);
const students =[
    {name:'Alice',score:50 },
    {name:'Bob',score:65 },
    {name:'Charlie',score:80 },
    {name:'David',score:45 },
    {name:'Joe',score:75 },
];
let newarr=students.filter(students=>students.score>60) .map(students=>students.score*2) .reduce((x,y)=>x+y,0);
console.log(newarr)