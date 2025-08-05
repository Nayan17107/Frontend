// 1) Print The 2D Array 

// let arr = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// console.log("Orignal Array");
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("Transpose Array");
// for (let m = 0; m < arr.length; m++) {
//     let Ans = [];
//     for (let n = 0; n < arr.length; n++) {
//         Ans.push(arr[n][m])
//     }
//     console.log(Ans);
// }

// Output -> 

// Orignal Array
// [ 10, 20, 30 ]
// [ 40, 50, 60 ]
// [ 70, 80, 90 ]

// Transpose Array
// [ 10, 40, 70 ]
// [ 20, 50, 80 ]
// [ 30, 60, 90 ]


// 2) Array Descending order sorting using selection sort

// let arr = [30,50,10,40,20]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[i] < arr[j]) {
//             let n = arr[i];
//             arr[i] = arr[j];
//             arr[j] = n;
//         }
//     }
// }
// console.log("Array In Descending Order :-",arr);

// Output -> 

// Array In Descending Order :- [ 50, 40, 30, 20, 10 ]



// 3) Array Ascending order sorting using Merge sort

// let arr = [20, 35, 4, 6, 19, 75];

// function Merge(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(Merge(left), Merge(right));
// }

// console.log(Merge(arr));

// function merge(left, right) {
//     let result = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     return [...result, ...left, ...right];
// }

// Output -> 

// [ 4, 6, 19, 20, 35, 75 ]