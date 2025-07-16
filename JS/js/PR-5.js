// 1) WAP to print the excepted output using array.


// let myColor = ["Red","Green","White","Black"]
// {
//     console.log(myColor);
//     console.log(myColor.join(","));         //Red,Green,White,Black
//     console.log(myColor.join("+"));         //Red+Green+White+Black
//     myColor.pop()
//     console.log(myColor.join(","));         //Red,Green,White
//     console.log(myColor.shift());           //Red
//     console.log(myColor.join(","));         //Green,White
//     myColor.unshift("Red");                 
//     myColor.push("Black,Orange");
//     console.log(myColor.join(","));         //Red,Green,White,Black,Orange
// }


// 2) WAP to calculate the sume of all the Array.

// A) Using For loop

// let a = [10, 20, 30];
// let n = 0;

// for(i = 0; i < a.length; i++)
// {
//     n += a[i];
// }
// console.log("The Sum Of All Numbers is :-",n);           //Output -> The Sum Of All Numbers is :- 60

// B) Using foreach loop

// let number = [10,20,30,40,50];
// let n = 0;

// number.forEach(number => {
//     n += number
// });
// console.log("The Total Ans is :-",n);            //Output -> The Total Ans is :- 150


// 3) WAP to Find the Max number and Min number.

// let numbers = [4, 10, 2, 8, 6, 12, 1];

// function findMinMax(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);

//   console.log("Maximum value is:", max);
//   console.log("Minimum value is:", min);
// }

// findMinMax(numbers);            //output -> Maximum value is: 12  Minimum value is: 1


// 4) WAP to convert all array elements into their ASCII values

// let n = ['A', 'B', 'C'];
// let ASCII = [];

// for (let i = 0; i < n.length; i++) {
//   ASCII.push(n[i].charCodeAt(0));
// }

// console.log(ASCII); //output -> [65, 66, 67]


// 5) WAP to Filter the Negative Values

// let n = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// let filterednumber = n.filter((ele) =>{
//     return ele >= 0;
// })
// console.log(filterednumber);         //output -> [0, 1, 5, 12, 19, 20]


// 6) WAP to Square Array Elements Using Map

// let n = [2,4,6];

// let ans = n.map((ele) => {
//     return ele ** 2;
// })
// console.log(ans);            //output -> [4, 16, 36]


// 7) WAP to Sorting Array in assending order

// let n = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
// let myColor = ["Red", "Green", "White", "Black"];

// let Colors = myColor.slice().sort();
// console.log(Colors);        // Output -> ["Black", "Green", "Red", "White"]

// n.sort((a, b) => a - b);
// console.log(n);           //output -> [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]


// 8) WAP to filter the string which is less than 8.

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

// // let ans = words.filter(word => word.length <= 8);

// console.log(ans);           //output ->['Python', 'Go', 'Java', 'PHP', 'Ruby']


// 9) WAP to Convert The String

// A) x = "airplane";  output - r

// let x = "airplane";

// console.log(x.charAt(2));

// B) x = "oxoxoxox";  output = "oXoXoXoX";

// let x = "oxoxoxox";
// let n = "";

// for (let i = 0; i < x.length; i++) {
//   if (i % 2 === 0) { 
//     n += "X";
//   } else {
//     n += "o";
//   }
// }

// console.log(n); // Output -> "oXoXoXoX"

// C) x = "A New Java Book";

// let x = "A New Java Book";
// console.log(x.toLowerCase()); // "a new java book"
// console.log(x.toUpperCase()); // "A NEW JAVA BOOK"


// 10) WAP to Array Reverse

// const x = [1, 2, 3, 4, 5];
// const y = x.slice().reverse(); 

// console.log(x); 
// console.log(y); //Output :- [5, 4, 3, 2, 1]


// 11) WAP to check value is found or not?

// let a = [10,20,30];

// console.log(a.includes(30));         //Output -> True(Because 30 is included in a)
// console.log(a.includes(50));         //Output -> false(Because 50 is not included in a)


// 12) WAP to Print Your Name and Count the Charactor of it

// let i = "Nayan"

// console.log("My Name is :-", i);
// console.log("The Number of Charactor is :-",i.length);          //output -> The Number of Charactor is :- 5


// 13) WAP to Change The Output

// let A = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let B = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

// let output = B.split('dog').join('cat');

// console.log("Output:",A);
// console.log("Output:", output);


// 14) WAP to Convert string Into array.

// let i = "Hire the top 1%"
// let n = i.split(" ")

// console.log(n);          //Output -> ['Hire', 'the', 'top', '1%']

// 15) WAP to Convert array into string.

// let i = ['5','32','Danial']
// let ans = i.join(',');
// console.log(ans);           //Output -> 5,32,Danial