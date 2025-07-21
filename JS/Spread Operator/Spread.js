// (...) -> Spread Operator

// Spread Operator is used to spread element of an array into individual element.


// let N = [11,22,33,44,55]
// let M = [...N];

// console.log(M);
// console.log(N);



// let data = [1,2,3,4,5,6]
// let [x,y,z,...m] = data

// console.log(...m);



// function Num(a, b, c) {
//     return a + b + c;
// }

// let nums = [10, 20, 30];
// let result = Num(...nums);
// console.log("Result:", result); 


// let person = {
//     name: "Johan Peter",
//     age: "50",
//     dob: "15-05-1975",
//     nationality: "USA",
// };

// let person2 = { ...person };
// person2.age = 30
// person2.name = "Nayan"
// console.log(person2);