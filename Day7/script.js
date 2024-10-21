// sayhello= () => {
//     console.log("I am in hello function");
// };
// console.log("Task Started");
// //setTimeout(sayhello,3000);
// sayhello();
// console.log("Task ended");
console.log("start");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("third task completed");
        },1000);
    },2000);
},3000);
console.log("End");