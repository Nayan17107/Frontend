// 1) WAP Calculate Bill


// let charge = 50, units, total, GST;

// units = Number(prompt("Enter The Unites :-"))

// if(units < 100){
//     GST = units * 0.15
//     total = (units + charge) + GST;

//     console.log("GST is :-", GST);
//     console.log("Total is :-", total);
// }else if(units < 200){
//     GST = units * 0.80
//     total = (units + charge) + GST;

//     console.log("GST is :-", GST);
//     console.log("Total is :-", total);
// }else if(units > 300){
//     GST = units * 0.90
//     total = (units + charge) + GST;

//     console.log("GST is :-", GST);
//     console.log("Total is :-", total);
// }
// else{
//     console.log("Enter The Units");
// }


// let units, total, minimumcharge = 50, GST = 15;

// units = Number(prompt("Enter The Unit :-"));
// console.log("Total Bill is :-", total + minimumcharge + (total % GST));

// if(units < 100){
//     total = units * 0.60
// }else if(units < 300){
//     total = units * 0.80
// }else{
//     total = units * 0.90
// }


// 2) WAP to Check Wheter Person Eligible for Voting or Not?


// let Age;

// Age = Number(prompt("Enter The Marks"));

// if(Age > 18){
//     console.log("Your Eligible for Voting.");
// }else{
//     console.log("Your Not Eligible for Voting.");
// }


// 3) WAP to Check salary of employee.


// let basicsalary, salary, HRA, DA;

// salary = Number(prompt("Enter your Salary :-"))

// if(salary < 0){
//     console.log("Invalid Salary");
// }else{
    
// if(salary > 0 && salary <= 5000){
//     HRA = salary * 0.08
//     DA = salary * 0.20

//     basicsalary = salary + HRA + DA
//     console.log("Your Salary is :-", basicsalary);
//     console.log("Your HRA is :-", HRA);
//     console.log("Your DA is :-", DA);
// }else if(salary >= 5000 && salary <= 10000){
//     HRA = salary * 0.12
//     DA = salary * 0.30

//     basicsalary = salary + HRA + DA
//     console.log("Your Salary is :-", basicsalary);
//     console.log("Your HRA is :-", HRA);
//     console.log("Your DA is :-", DA);
// }else if(salary >= 10000 && salary <= 15000){
//     HRA = salary * 0.15
//     DA = salary * 0.40

//     basicsalary = salary + HRA + DA
//     console.log("Your Salary is :-", basicsalary);
//     console.log("Your HRA is :-", HRA);
//     console.log("Your DA is :-", DA);
// }else{
//     if(salary >= 15000){
//         HRA = salary * 0.20
//         DA = salary * 0.50

//     basicsalary = salary + HRA + DA
//     console.log("Your Salary is :-", basicsalary);
//     console.log("Your HRA is :-", HRA);
//     console.log("Your DA is :-", DA);
//     }
// }
// }


// 4) WAP To Calculate Tax.


// let tex, income;

// income = Number(prompt("Enter Your Income ="));


// if(income > 2500 || income < 5000){
//     tax = (income - 2500) * 0.10;

//     console.log("Your Income is :-", income);
//     console.log("Tax is :-", tax);
// }else if(income > 5000 || income < 10000){
//     tax = (income - 5000) * 0.20;

//     console.log("Your Income is :-", income);
//     console.log("Tax is :-", tax);
// }else{
//     income < 10000
//     tax = (income - 10000) * 0.30;

//     console.log("Your Income is :-", income);
//     console.log("Tax is :-", tax);
// }


// 5) Calculate the marks of student.


// marks = Number(prompt("Enter The Marks"));

// if (marks > 100 || marks < 0){

//     console.log("Enter a valid Marks");

// }else{
//     if (marks > 85)
//     console.log("Your Grade is : A");

//     else if(marks > 75)
//     console.log("Your Grade is : B");

//     else if(marks > 60)
//     console.log("Your Grade is : C");

//     else if(marks > 45)
//     console.log("Your Grade is : D");

//     else if(marks > 35)
//     console.log("Your Grade is : F");

//     else{
//         console.log("Your Faild");
//     }
// }


// 6) WAP to Print numbers


// let x , y;

// x = Number(prompt("Enter X Value ="));
// y = Number(prompt("Enter Y Value ="));

// if(x < 2000 || x > 3000){
//     console.log("X's Value is :-", x);
// }

// if(y >= 100 || y <= 500){
//     console.log("Y's Value is :-", y);
// }