// Syntax => element[];
// i[11, 22, 33];

// Methods Of Array => Push , Pop , Shift , Unshift , Splice

// let n = [10, 20, 30, 40, 50]
// console.log(n);

// 1) Push => Add Element in The Last Place

// n.push(60);
// n.push(70);
// console.log(n);

// 2) Unshift => Add Element in The First Place

// n.unshift(90);
// n.unshift(100);
// console.log(n);

// 3) Pop => Delete The Element Which is in Last Place.

// n.pop();
// n.pop();
// console.log(n);

// 4) shift => Delete The Element Which is in First Place.

// n.shift();
// n.shift();
// console.log(n);

// 5) splice => It can ADD And Remove The Data From The String 

// => For Removing Data

// n.splice(2,3)        // (2 = is index number, 3 = Number of index we had to remove)
// console.log(n);

// => For Adding Data

// n.splice(2, 2, 11,22)   // (2 = index number, 2 = delete the number of index after that 2 incex, 11,22 = add this new index)
// console.log(n);

// 6) includes => Data is exist or not in the index?

// console.log(n.includes(20));
// if Showen data is showen in index then Return True or False.

// 7) is array() => Checks Data is in Array Formate or not?

// console.log(Array.isArray(n));

// 8) Some => Condition Check Karavava Mate Use Thay

// let ans = n.some((ele,i) =>{
//     return ele > 200;
// })
// console.log(ans);

// 9) Every => Badhi Condition Check Karavava Mate Use Thay

// let ans = n.every((ele,i) =>{
//     return ele > 9;
// })
// console.log(ans);

// 10) Filter => Filter The Data From The Array.

// let ans = n.filter((ele,i) =>{
//     return ele < 40;
// })
// console.log(ans);