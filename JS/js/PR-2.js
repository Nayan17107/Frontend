// 1) Calculate The Bill.

// let units, Total;

// units = Number(prompt("Enter The Units :-"));

// if(units <= 50){
//     Total = units * 1;
// }else if(units <= 150){
//     Total = units * 2;
// }else if(units <= 250){
    
//     Total = units * 3;
// }else{
//      if(units >= 250)
//      Total = units * 4;
// }

// if(Total >= 150){
//    Total += Total * 0.20;
// }

// console.log("Your Total Bill is", Total);



// let units = Number(prompt("Enter number of units consumed:"));
// let amount = 0;

// if (units <= 100) {
//   amount = units * 0.60;
// } else if (units <= 300) {
//   amount = (100 * 0.60) + ((units - 100) * 0.80);
// } else {
//   amount = (100 * 0.60) + (200 * 0.80) + ((units - 300) * 0.90);
// }

// if (amount < 50) {
//   amount = 50;
// } else if (amount > 300) {
//   let surcharge = amount * 0.15;
//   amount += surcharge;
// }

// console.log("Total Electricity Bill: ₹" + amount.toFixed(2));


// 2) WAP to Print Season Accoarding User Input Using Switch case.


// let month = Number(prompt("Enter the month number :-"));

// switch (true) {
//   case (month >= 1 && month <= 4):
//     console.log("Season is Winter");
//     break;

//   case (month >= 5 && month <= 8):
//     console.log("Season is Summer");
//     break;

//   case (month >= 9 && month <= 12):
//     console.log("Season is Monsoon");
//     break;

//   default:
//     console.log("Invalid season");
//     break;
// }


// 3) WAP to Calculate Intrest


// let P, R, N , Intrest;

// P = Number(prompt("Enter The P:"));
// N = Number(prompt("Enter The N:"));

// if (N < 3 && N <= 5) {
//   R = 3;
// } else if (N > 5 && N <= 8) {
//   R = 5;
// } else if (N > 8 && N <= 12) {
//   R = 12;
// } else {
//   R = 15;
// }


// Intrest = (P * R * N) / 100;

// console.log("Interest Rate (R):", R + "%");
// console.log("The Total is :-", Intrest);


// 4) WAP to Check Wheter Person Eligible for Voting or Not?


// let Age;

// Age = Number(prompt("Enter The Marks"));

// if(Age > 18){
//     console.log("Your Eligible for Voting.");
// }else{
//     console.log("Your Not Eligible for Voting.");
// }


// 5) WAP To Classify Age Groups.


// let Age;

// Age = Number(prompt("Enter Your Age :-"))

// if (Age < 0) {
//     console.log("Invalid Age");
// } 
// else if (Age <= 12){
//     console.log("Your Child");
// } 
// else if (Age <= 19){
//     console.log("Your Teenager");
// } 
// else if (Age <= 35){
//     console.log("Your Adult");
// } 
// else if (Age <= 59){
//     console.log("Your Scenior");
// } 
// else {
//     console.log("Your Old");
// }