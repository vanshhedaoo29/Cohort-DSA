// Nested Loops and Pattern Programming

// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")         // * * * * * will be printed

//------------------------------------------------------------------------------------------------------------------------

// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         // * * * * *
// }

//----------------------------------------------------------------------------------------------------------------


// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         
// }
// console.log();
// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         
// }
// console.log();
// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         
// }
// console.log();
// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         
// }
// console.log();
// for(let i=1; i<=5 ; i++){
//     process.stdout.write("* ")         
// }
// console.log();

/* 
* * * * *        Prints pattern like this
* * * * *
* * * * *
* * * * *
* * * * *
*/

/*--------------------------------------------------------------------------------------- */

// for(let i=1; i<=5 ; i++){
//     for(let j=1; j<=5 ; j++){
//         process.stdout.write("* ")
//     }
//     console.log();        
// }

/* 
* * * * *        Prints pattern like this
* * * * *
* * * * *
* * * * *
* * * * *
*/

//--------------------------------------------------------------------------------------

// const prompt = require('prompt-sync')()   // Taking input using VS Code Terminal not by console
// let n = prompt("Enter a Number : ")       // By using node prompt sync module
// console.log(n);

//-------------------------------------------------------------------------------------------------

// Q.   Print Right Angle Triangle using Star

// const prompt = require('prompt-sync')()   // Taking input using VS Code Terminal not by console
// let n = prompt("Enter a Number : ")       // By using node prompt sync module
// for(let i=1; i<=n ; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write("* ")
//     }
//         console.log();        
// }

/*
Enter a Number : 5
* 
* *
* * *
* * * *
* * * * * 
*/

//-----------------------------------------------------------------------------------------------------------------------------------------


// const prompt = require('prompt-sync')()   
// let n = prompt("Enter a Number : ")       
// for(let i=1; i<=n ; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(j + " ")
//     }
//         console.log();        
// }

/*
Enter a Number : 4
1 
1 2
1 2 3
1 2 3 4
*/

//------------------------------------------------------------------------------------------

// Q. Printing Invered right triangle using star pattern

// const prompt = require('prompt-sync')()   
// let n = prompt("Enter a Number : ")  
// let temp = 5      
// for(let i=1; i<=n ; i++){
//     for(let j=1; j<=temp ; j++){
//         process.stdout.write("* ")
//     }
//     temp--
//     console.log();        
// }

/*
Enter a Number : 5
* * * * * 
* * * *
* * *
* *
*
*/

//------------------------------------------------------------------------------------------

// Another Approach
// Q. Printing Invered right triangle using star pattern

// const prompt = require('prompt-sync')()   
// let n = prompt("Enter a Number : ")  
     
// for(let i=1; i<=n ; i++){
//     for(let j=1; j<=n-i+1 ; j++){
//         process.stdout.write("* ")
//     }
//     console.log();        
// }

/*
Enter a Number : 5
* * * * * 
* * * *
* * *
* *
*
*/

//----------------------------------------------------------------------------------------------------