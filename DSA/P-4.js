// 1) Write a program for Stack Operation Program.


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
//         if(this.items.length == 0){
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

// -> Output  => 10 -> 20 -> 30

// stack.pop()
// stack.printStack();

// -> Output  => 10 -> 20

// stack.pop()
// stack.pop()
// stack.pop()
// stack.isEmpty()

// -> Output  => Stack is Empty!

// console.log(stack.length());

// -> Output  => 3



// 2) Write a program for Next Greater Element using Stack.


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

// -> Output => [ 5, 25, 25, -1 ]



// 3) Write a program for a reverse string using Stack.


// function reverseStringUsingStack(str) {
//     let stack = [];
//     let reversed = "";

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }

//     while (stack.length > 0) {
//         reversed += stack.pop();
//     }

//     return reversed;
// }

// console.log(reverseStringUsingStack("Hello World"));

// -> Output => dlroW olleH