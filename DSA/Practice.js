// Q-1 -> Find Maximum Number

// let arr = [10,20,30,100,40,50];
// let max = arr[0];

// arr.forEach(num => {
//     if (num > max) {
//         max = num;
//     }
// });

// console.log("Maximum number is:", max);


// Q-2 -> Remove Duplicates elements of given Array

// let arr = [1,2,3,5,5,4,7]
// let ans = []

// arr.forEach(num => {
//     if(num.length == num.length){
//         console.log(num);
//     }else{
//         ans.pop(num);
//         console.log(ans);
//     }
// })


// Q-3 -> Reverse The Given Array

// let arr = [10,20,30,40,50]
// let n = []

// for(let i = arr.length -1; i >= 0; i--){
//     n.push(arr[i])
// }
// console.log(n);


// Q-4 -> Concate the Given Array

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [7,8,9]

// let ans = [...a,...b,...c]

// console.log(ans);


// Q-5 -> Search Incert Position of Given Array

// let nums = [1, 3, 5, 6];
// let target = 4;

// let searchInsert = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;
// };

// console.log(searchInsert(nums, target));


// let str = "Prajapati Nayan"
// let ans = 0;
// str.toLowerCase();

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         str.includes(i);
//         ans++;
//     }
// }
// console.log("Total Vowel Numbers :-",ans);