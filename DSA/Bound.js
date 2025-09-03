// Lower Bound


// let arr = [1, 2, 4, 4, 4, 5, 7, 9];
// let target = 7;

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

// console.log("Lower Bound:", lowerBound(arr, target)); 



// Upper Bound


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

// let arr = [1, 2, 4, 4, 4, 5, 7, 9];
// let target = 4;

// console.log("Upper Bound:", upperBound(arr, target));
