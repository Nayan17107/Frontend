// 1) WAP to implement binary search to find the index of a target element in a sorted array.


// let arr = [10, 20, 30, 40, 50];

// function binarySearch(arr, target) {
//     let low = 0, high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === target) {
//             return mid;  
//         }
//         else if (arr[mid] < target) {
//             low = mid + 1; 
//         }
//         else {
//             high = mid - 1; 
//         }
//     }
//     return -1; 
// }

// console.log("The Index of Target Element is :-", binarySearch(arr, 30));

// -> Output  

// The Index of Target Element is :- 2


// 2) WAP to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.


// let arr = [2, 4, 4, 4, 6, 7, 7, 9];

// function lowerBound(arr, target) {
//     let low = 0, high = arr.length;

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low;
// }

// function upperBound(arr, target) {
//     let low = 0, high = arr.length;

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] <= target) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low;
// }

// let target = 4;

// let low = lowerBound(arr, target);
// let upp = upperBound(arr, target);
// let count = upp - low;  

// console.log("Lower Bound:", low);
// console.log("Upper Bound:", upp);
// console.log("Occurrences:", count);

// -> Output

// Lower Bound: 1
// Upper Bound: 4
// Occurrences: 3


// 3) WAP to find the pivot index where the rotation occurs in a rotated sorted array.


// let rotated = [40, 50, 60, 10, 20, 30];

// function findPivot(arr) {

//     let low = 0, high = arr.length - 1;

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] > arr[high]) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low; 
// }

// console.log("Pivot index :-", findPivot(rotated)); 

// Output
// Pivot index :- 3
