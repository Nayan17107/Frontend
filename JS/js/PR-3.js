// 1) WAP to display multiplication table of a given integer 


// number = Number(prompt("Enter the Number :-")); 
// let i = 1;

// while (i <= 10) {
//     console.log(number, " X ", i, " = ", number * i);
//     i++;
// }

// Output => If N = 5

// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4 = 20


// 2) WAP to Calculate the Factorial of given number.


// number = Number(prompt("Enter the Number :-")); 
// let i = 1;
// N = 1;

// while (i <= number) {
//     N *= i
//     i++;
// }   
// console.log("Factorial Of Given Number is :-", N);

// Output => if number = 4 then it's Factorial is = 24


// 3) WAP to Given Number is Armstrong or not?


// let n = Number(prompt("Enter your number:")) , x , sum = 0, og = n , num = n ,count = 0;

// while (num != 0) {
//     num = Math.floor(num / 10)
//     count++  
// }
// do{
//     x = n % 10; // 153 --> 3 
//     sum += x ** count  // 3 ** 3 --> 27 + 125 +1 == 153
//     n = Math.floor(n / 10); // 15

// }while (n != 0) 

// if (sum == og) {
//     console.log("Armestrong number"); 
// }else{
//     console.log(" not a Armestrong  number"); 

// }


// 4) WAP to find the given Number is Palindrome or not?


// number = Number(prompt("Enter the Number :-")); 
// let i = 1;


// while (i <= number) {
//   let num = i;
//   let Digit = 0;
//   let N = i;

//   while (N > 0) {
//     let digit = N % 10;
//     Digit = Digit * 10 + digit;
//     N = Math.floor(N / 10);
//     i++;
//   }

//   if (num === Digit) {
//     console.log(num);
//   }

// }
// console.log(number);

// Output => If Given Number is same as both side like 12321 then given number is Palindrome


// 5) WAP to Calculate Fibonacci Searies of a given number.


// number = Number(prompt("Enter the Number :-")); 
// let Y = 0, Z = 1;
// let i = 1;

// while (i <= number) {
//   console.log(Y);
//   let N = Y + Z;
//   Y = Z;
//   Z = N;
//   i++;
// }

// Output => it's calcula the sum of given number like given number is 5 then
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5


// 6) WAP to Calculate Integers from 0 to 30 using do-while.


// let sum = 0;
// let i = 0;

// do {
//   sum += i;  
//   i++;       
// } while (i <= 30);

// console.log("The total sum is: " + sum);


// Output => Calculets the sum of 0 to 30 numbers like 0+1+2+..+29+30


// 7) WAP to Print Words

// let i = 1;

// do {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// } while (i <= 100);

// Output => Print Those Word insted if number is divided by 5 & 3


// 8) WAP to Print 1 to 10 in single line

// let Ans = '';
// for (let i = 1; i <= 10; i++) {
//   Ans += i;
//   if (i < 10) {
//     Ans = Ans + '-';
//   }
// }
// console.log(Ans); 

// Output: 1-2-3-4-5-6-7-8-9-10


// 9) WAP to displays the sum of squares from 1² to 10² and shows the total (385) in a single line.


// let sum = 0;
// let Ans = '';

// for (let i = 1; i <= 10; i++) {
//   square = i * i;
//   sum += square;
//   Ans += square;
//   if (i < 10) {
//     Ans += '+';
//   }
// }

// console.log(Ans + ' = ' + sum);


// 10) WAP to Display Pattern

// for (let i = 1; i <= 5; i++) {
//     let N = '';
//     for (let j = 5; j > 5 - i; j--) {
//         N = N + j + ' ';
//     }
//     console.log(N);
// }

// Output => 

// 5 
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1


// 11) WAP to Display Pattern

// let num = 1;

// for (let i = 1; i <= 5; i++) {
//   let N = '';
//   for (let j = 1; j <= i; j++) {
//     N += num + ' ';
//     num++;
//   }
//   console.log(N);
// }

// Output => 

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15