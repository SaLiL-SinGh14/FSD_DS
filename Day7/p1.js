//***promises***

// const myPromise = new Promise((resolve, reject) => {
//     let success=true;
//     if(success){
//         resolve("Data Send Successfully");

//     }else{ 
//         reject("Data Failed to send");
//     }

// });

// myPromise.then((message)=>{
//     console.log("Data Received \n"+message);
// })
// .catch((err)=>{
//     console.log("Failed to fetch data : "+err);
// });
function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
task("First Task Completed", 1000)
    .then(() => task("Second task is completed", 2000))
    .then(() => task("Third Task completed", 3000))
    .then(() => task("fourth Task completed", 4000));