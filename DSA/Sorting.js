// 1) Bubble Shorting

// let array = [50, 12, 8, 2, 32, 25];
// let temp

// for (let i = 0; i < array.length; i++) {

//     for (let j = 0; j < array.length - i; j++) {

//         if (array[j] > array[j + 1]) {
//             temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }
// }
// console.log(array);


// 2) Selection Sorting

// -> First And Second Element ne Sarkhave Array na.

// let arr = [100, 30, 5, 8, 88]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[i] > arr[j]) {
//             let n = arr[i];
//             arr[i] = arr[j];
//             arr[j] = n;
//         }

//     }
// }
// console.log(arr);


// 3) Merge shorting

// let arr = [20, 35, 4, 6, 19, 75];

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

// function Merge(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(Merge(left), Merge(right));
// }

// console.log(Merge(arr));


// 4) Quick Shoting

// let arr = [60 , 20 , 80, 40 ,10 ,30 ,50 , 90 ,70];

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = arr.filter(m => m < pivot);
//     let middle = arr.filter(m => m === pivot);
//     let right = arr.filter(m => m > pivot);

//     return quickSort(left).concat(middle).concat(quickSort(right));
// }

// console.log(quickSort(arr));