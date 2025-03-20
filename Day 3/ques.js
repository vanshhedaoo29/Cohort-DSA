// Q5. Accept a year and check if it is a leap year or not


// let y = Number(prompt("Enter a Year"))
// let isLeap = false
// if(y%4==0)
// {
//     if(y%100==0)
//     {
//         if(y%400==0)
//         {
//             isLeap = true
//         }
//         else
//         {
//             isLeap = false
//         }
//     }
//     else
//     {
//         isLeap = true
//     }
// }
// else
// {
//     isLeap = false
// }
// console.log(isLeap? "Leap Year" : "Not a Leap Year");


// Another Approach
// let y = Number(prompt("Enter a Year"))
// let isLeap = false
// if(y%4==0 && y%100!=0)
// {
//     console.log("Leap Year");
// }
// else if(y%400==0)
// {
//     console.log("Leap Year")
// }
// else
// {
//     console.log("Not a Leap Year");
// }


// Q6. Shop discount


// let amount = Number(prompt("Enter Amount"))
// if(amount>0 && amount<=5000)
// {
//     console.log("Payable Amount : " + amount);
// }
// else if(amount>=5001 && amount<=7000)
// {
//      console.log("Payable Amount : " + (amount-((5/100)*amount)));
// }
// else if(amount>=7001 && amount<=9000)
// {
//     console.log("Payable Amount : " + (amount-((10/100)*amount)));
// }
// else if(amount>9000)
// {
//     console.log("Payable Amount : " + (amount-((20/100)*amount)));
// }
// else
// {
//     console.log("Invalid Input");
// }


// Q7. Electricity Bill


// let unit = Number(prompt("Enter Units Consumed"))
// if(unit <= 0 ){
//     console.log("Invalid Input"); 
//     console.log("Electricity Bill : ₹ 0");
// }
// let amount = 0
// if(unit>0 && unit<=100)
// {
//     amount = unit * 4.2
// }
// else if(unit>=101 && unit<=200)
// {
//     amount = (100*4.2) + ((unit-100)*6)
// }
// else if(unit>=201 && unit<=400)
// {
//     amount = (100*4.2) + (100*6) + ((unit-200)*8)
// }
// else 
// {
//     amount = (100*4.2) + (100*6) + (200*8) + ((unit-400)*13)
// }
// console.log("Electricity Bill : ₹ " + amount);