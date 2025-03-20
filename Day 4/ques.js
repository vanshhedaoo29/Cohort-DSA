// Q1. Accept an integer and print hello world n times 


// let num = Number(prompt("Enter a Number"))
// let i;
// if(isNaN(num))
// {
//     console.log("Invalid Input");
// }
// else
// {
//     for(i=1 ; i<=num ; i++)
//         {
//             console.log("Hello World !");
//         }
//         console.log('Fail at ' + i);
// }
    


// Q2. Print natural number upto n 


// let n = Number(prompt("Enter a Number"))
// for(let i=1 ; i<=n ; i++)
// {
//     console.log(i);
// }


// Q3. Reverse for loop, print n to 1 


// let n = Number(prompt("Enter a Number"))
// for(let i=n ; i>=1 ; i--)
// {
//     console.log(i);
// }


// Q4. Take a number as input and print its table 


// let t = Number(prompt("Enter a Number for Table"))
// for(let i=1 ; i<=10 ; i++)
// {
//     console.log(t + " * " + i + ' = ' + (t*i));
// }


// Q5. Sum upto n terms


// let t = Number(prompt("Enter number of terms for Sum")) 
// let sum = 0
// for(let i=1 ; i<=t ; i++)
// {
//     sum += i;
// }
// console.log("Sum upto " + t + " terms is " + sum);

// Q6. Factorial of a number 


// let t = Number(prompt("Enter number for Factorial")) 
// let fact = 1
// for(let i=1 ; i<=t ; i++)
// {
//     fact *= i;
// }
// console.log("Factorial of " + t + " is " + fact);


// Q7. Print the sum of all even and odd numbers in a range separately 


// let a = Number(prompt("Enter First Number")) 
// let b = Number(prompt("Enter Last Number")) 
// let odd = 0
// let even = 0
// for(let i=a ; i<=b ; i++)
// {
//     if(i%2==0) even += i;
//     else odd += i;
// }
// console.log('Sum of Even Numbers is ' + even);
// console.log('Sum of Odd Numbers is ' + odd);

// Q8. Print all the factors of a number 


// let a = Number(prompt("Enter a Number")) 
// let factor = ' ';
// for(let i=1 ; i<=a ; i++)
// {
//     if(a%i==0) factor += i + ' ';
// }
// console.log(factor);

// Another approaach
// let n = Number(prompt("Enter a Number")) 
// for(let i=1 ; i<=n/2 ; i++)
// {
//     if(n%i==0) console.log(i);
// }
// console.log(n);


// Q9. Check if a number is prime or not 


// let a = Number(prompt("Enter a Number")) 
// let isPrime = true;
// if(a<=1)
//     {
//         isPrime = false
//         console.log('Invalid Input');
//     }
// for(let i=2 ; i<=a/2 ; i++)
// {
//     if(a%i==0)
//     {
//         isPrime = false
//         break;
//     }
// }
// if(isPrime) console.log('Prime Number');
// else console.log('Not a Prime Number');

// Another Approach
// let a = Number(prompt("Enter a Number")) 
// let isPrime = isPrimeFun(a);
// if(isPrime) console.log('Prime Number');
// else console.log('Not a Prime Number');

// function isPrimeFun(a)
// {
//     if(a<=1) return false
//     if(a==2) return true
//     if(a%2==0) return false
//     for(let i=3 ; i<=Math.floor(Math.sqrt(a)) ; i+=2)
//     {
//         if(n%i==0) return false
//     }
//     return true
// }

// Q10. WAP to take two inputs a and b and find the value of a raised to the power b  


// let a = Number(prompt("Enter the value of a"))
// let b = Number(prompt("Enter the value of b"))
// let pow =1 
// if(a==0 && b==0)
//     {
//         console.log("Invalid Input");
//     }
//     if (a == 0 && b!=0) 
//     {
//         console.log("Invalid Input");
//     }
//     if (a!=0 && b == 0) 
//     {
//         pow = 1
//         console.log(pow);
//     }    
// for(let i=1 ; i<=b ; i++)
// {
//     pow = pow * a      
// }
// if(a>1 && b>1) console.log(pow)