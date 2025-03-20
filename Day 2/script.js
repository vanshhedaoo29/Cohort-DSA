// console.log(Math.ceil(10.1));       // 11  Brings to higher range
// console.log(Math.floor(10.1));      // 10  Brings to lower range
// console.log(Math.round(10.49));     // 10  Rounded to nearest integer
// console.log(Math.round(10.5));       // 11 Rounded to nearest integer
// console.log(Math.abs(-8));       // 8 Returns the absolute value
// console.log(Math.abs(8));       // 8 Returns the absolute value
// console.log(Math.trunc(15.54946564446)); // 15  Returns the interger part
// console.log(Math.pow(5,2));
// console.log(Math.sqrt(36));
// console.log(Math.cbrt(125));
// console.log(Math.max(36,56,12,45));
// console.log(Math.min(36,56,12,45));
// console.log(Math.random());             // 0to 1

// let a = 234.984964561;
// let b = Number((a.toFixed(2)));
// console.log(b);

// Calculate Compound Interest

// let p = Number(prompt("Enter Principle"))
// let r = Number(prompt("Enter Rate"))
// let t = Number(prompt("Enter Time"))

// /*
// A = p * (1+r/100)^t
// CI = A - p*/ 
// console.log(p * Math.pow(1 + r/100 , t) - p);

// Generating OTP

// console.log(Math.floor(Math.random()*9000 + 1000));

// Area of triangle by Herons Formula

// let a = Number(prompt("Enter Number 1"))
// let b = Number(prompt("Enter Number 2"))
// let c = Number(prompt("Enter Number 3"))

// if(a+b<=c || b+c<=a || c+a<=b)
// {
//     console.log("Not Possible");
// }
// else
// {
//     let s = a + b + c /2;
//     let ans = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     let fin = ans.toFixed(0);
//     console.log(fin);
// }

// Q. Circumference of Circle

// let r = Number(prompt("Enter the radius"));
// console.log(2 * Math.PI * r);