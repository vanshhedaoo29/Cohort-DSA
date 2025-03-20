// let arr = [10,20,30,40]
// console.log(arr);
// arr.push(25)
// arr.unshift(101)
// arr.pop()
// console.log(arr.length);

// push - insert at last
// pop - delete at last
// unshift - insert at first
// shift - delete at first

// arr[2]=100
// arr[10]=1000
// console.log(arr[5]);


// New way to make array

// let arr = new Array(4); // 0 to 3
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;                 // Dynamic behaviour
// arr[6]=100;

// arr.push(100);
// console.log(arr);

// Accecpt value from user side and assign in array

// let prompt = require("prompt-sync")()
// let size = Number(prompt("Enter Array's Size : "))
// let arr = new Array(size)
// for(let i=0; i<arr.length ; i++)
// {
//     arr[i] = Number(prompt("Enter Element : "))
// }
// console.log(arr);

// Sum of arrays elements

// let prompt = require("prompt-sync")()
// let size = Number(prompt("Enter Array's Size : "))
// let arr = new Array(size)
// let sum =0
// for(let i=0; i<arr.length ; i++)
// {
//     arr[i] = Number(prompt("Enter Element : "));
//     sum = sum + arr[i];
// }
// console.log("Sum = " + sum);

// Max elemet in an array

// let arr = [10, 5, 15 , 8, 3 , 46 , 19];

// let max = arr[0]
// for(let i=1 ; i<arr.length ; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log("Max Element : " + max);
