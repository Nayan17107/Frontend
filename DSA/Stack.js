// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is Empty!";
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         if (this.items.length == 0) {
//             console.log("Stack is Empty!");
//         }
//     }

//     length() {
//         return this.items.length;
//     }

//     printStack() {
//         console.log(this.items.join(" -> "));
//     }
// }

// let stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.printStack();

// stack.pop()
// stack.printStack();

// stack.pop()
// stack.pop()
// stack.pop()
// stack.isEmpty()

// console.log(stack.length());



// 1. reverse string using stack



// function reverseStringUsingStack(str) {
//   let stack = [];
//   let reversed = "";

//   for (let i = 0; i < str.length; i++) {
//     stack.push(str[i]);
//   }

//   while (stack.length > 0) {
//     reversed += stack.pop();
//   }

//   return reversed;
// }

// console.log(reverseStringUsingStack("hello"));



// 2.Balanced parenthesis



// function isBalanced(str) {
//     let stack = [];
//     let pairs = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         }
//         else if (char === ')' || char === '}' || char === ']') {
//             if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }

//     return stack.length === 0;
// }

// console.log(isBalanced("{[()]}"));
// console.log(isBalanced("{[(])}"));
// console.log(isBalanced("((()))"));
// console.log(isBalanced("((())"));



// 3.next Greater Elements



// function nextGreaterElements(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);
//     let stack = [];

//     for (let i = n - 1; i >= 0; i--) {
//         while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//             stack.pop();
//         }

//         if (stack.length > 0) {
//             result[i] = stack[stack.length - 1];
//         }

//         stack.push(arr[i]);
//     }

//     return result;
// }

// console.log(nextGreaterElements([4, 5, 2, 25]));
// console.log(nextGreaterElements([13, 7, 6, 12]));