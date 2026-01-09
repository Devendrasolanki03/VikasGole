// console.log("frist");
// setTimeout(()=>{
//     console.log("Second");
// },2000);

// console.log("thrid");

// var a =10;
// let b = 0;
// setTimeout(()=>{
//     b = 20;
// },2000);
// console.log("sum is ",(a+b));



//promiss
// console.log("Start")
// var a =10;
// let b = 0;
// let waitingData = new Promise( (resolve , reject)=>{
// setTimeout(()=>{
//     resolve(20);
// },1000)
// })
// waitingData.then((data)=>{
//     b=data;
//     console.log("sum is ",(a+b));
// }).catch(()=>{console.log("some error is there")})
// console.log("Done")


//02
// console.log("Start")
// let promiss1 = new Promise( (resolve , reject)=>{
// let flag = true;
// if(flag){
//     resolve();
// }
// else{
//     reject();
// }
// })
// console.log("some work here")
// promiss1.then(()=>{
//    console.log("promise  is resolve ")
// }).catch(()=>{console.log("some error is there")})
// console.log("Done")


// 03
// function getData(id){
//     setTimeout(()=>{
//         console.log(" data ",id)
//     },2000)
// }
// getData(1);
// getData(2);
// getData(3)


//04 callback hell
// function getData(id, next) {
//     setTimeout(() => {
//         console.log(" data ", id)
//         if (next) {
//             next();
//         }
//     }, 2000)
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });


// 05 promise chaining
// function getData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", id);
//             resolve("success");
//         }, 2000);
//     });
// }
// console.log("waiting for data 1");
// getData(1)
//     .then((result) => {
//         console.log(result);
//         console.log("waiting for data 2");
//         return getData(2);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("waiting for data 3");
//         return getData(3);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("all data received");
//     })
//     .catch((error) => {
//         console.log("error:", error);
//     });

// async  06
// async function hello() {
//     console.log("heloooooooooo")

// }
// console.log(hello())


//07
// function getApp() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("getting data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getData() {
//     await getApp();
//     await getApp();
// }
// getData();



//08
// function getApp(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" data ",id);
//             resolve("scucess");
//         }, 2000);
//     });
// }
// async function getData() {
//     console.log("geting data 1")
//     await getApp(1);
//      console.log("geting data 2")
//     await getApp(2);
//     console.log("getting data 3 ")
//     await getApp(3);
// }
// getData();

// optional chaing

// let user = {
//     profile :{
//         email : "abc@gmail.com"
//     }

// }

// console.log(user.profile.email);
// console.log(user.post?.phone);



// let arr = [1, 8, 6, 66]
// console.log(arr[9]?.toString());



// let obj = {
//     get: function () {
//         return "hello"
//     }
// };

// // console.log(obj.get());
// console.log(obj.bye?.())

// await function is used to wait for a promise to resolve or reject inside an async function. It pauses the execution of the async function until the promise is settled, allowing for cleaner and more readable asynchronous code without the need for .then() or .catch() methods.

// In the provided code snippet, the await keyword is used before the getApp() function calls within the async function getData(). This means that the execution of getData() will pause at each await statement until the corresponding getApp() promise is resolved. This ensures that the data retrieval operations are completed in sequence, allowing for proper handling of asynchronous tasks in a synchronous-like manner.
// Example:
// function getApp(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(" data ",id);
//             resolve("scucess");
//         }, 2000);
//     });
// }
// async function getData() {
//     console.log("geting data 1")
//     await getApp(1);
//      console.log("geting data 2")
//     await getApp(2);
//     console.log("getting data 3 ")
//     await getApp(3);
// }
// getData();
// // Example of using sessionStorage to store user preferences
// give me example of top level await in javascript with code and explaination.
// Top-level await is a feature in JavaScript that allows you to use the await keyword outside of an async function, directly at the top level of a module. This means you can wait for promises to resolve without needing to wrap your code in an async function. Top-level await is particularly useful in modules where you want to perform asynchronous operations during the module's initialization phase.
// Example:
// // dataFetcher.js
// export async function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Fetched Data");
//         }, 2000);
//     });
// }
// // main.js
// import { fetchData } from './dataFetcher.js';
// const data = await fetchData();
// console.log(data); // Output: Fetched Data
// In this example, we have two files: dataFetcher.js and main.js. The fetchData function in dataFetcher.js simulates an asynchronous operation that fetches data after a delay of 2 seconds. In main.js, we use top-level await to call fetchData and wait for it to resolve before logging the result to the console. This allows us to handle asynchronous operations in a straightforward manner without needing to define an async function in main.js.
