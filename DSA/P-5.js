// 1) Write a program for Circular Queue.

// class CircularQueue {
//     constructor(Length) {
//         this.Length = Length;
//         this.queue = new Array(Length);
//         this.Start = 0;
//         this.End = -1;
//         this.count = 0;
//     }

//     Add(value) {
//         if (this.count === this.Length) {
//             console.log("Queue is Full");
//             return;
//         }
//         this.End = (this.End + 1) % this.Length;
//         this.queue[this.End] = value;
//         this.count++;
//     }

//     Delete() {
//         if (this.count === 0) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let removed = this.queue[this.Start];
//         this.Start = (this.Start + 1) % this.Length;
//         this.count--;
//         console.log("Removed:", removed);
//     }

//     Display() {
//         if (this.count === 0) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let result = [];
//         for (let i = 0; i < this.count; i++) {
//             result.push(this.queue[(this.Start + i) % this.Length]);
//         }
//         console.log("Queue:", result.join(" "));
//     }
// }

// let cq = new CircularQueue(5);

// cq.Add(10);
// cq.Add(20);
// cq.Add(30);
// cq.Add(40);
// cq.Add(50); 
// cq.Display();

// cq.Delete();
// cq.Display();

// cq.Add(60);
// cq.Add(70);
// cq.Display();

// Output => 

// Queue: 10 20 30 40 50
// Removed: 10
// Queue: 20 30 40 50
// Queue is Full
// Queue: 20 30 40 50 60


// 2) write a program Queue using two stacks.


// class Queue{
//     constructor(){
//         this.s1 = []
//         this.s2 = []
//     }

//     Add(ele){
//         this.s1.push(ele)
//     }

//     delete(){
//         while(this.s1.length > 1){
//             this.s2.push(this.s1.shift());
//         }
//         [this.s2 , this.s1] = [this.s1 , this.s2]
//         this.s2.shift()
//     }

//     Length(){
//         console.log("The Length of the Queue is :-" + this.s1.length)
//     }
// }

// let Que = new Queue();

// Que.Add(10);
// Que.Add(20);
// Que.Add(30);
// Que.Add(40);

// console.log(Que);

// Que.delete();

// console.log(Que);

// Que.Length()

// Output =>

// Queue { s1: [ 10, 20, 30, 40 ], s2: [] }
// Queue { s1: [ 10, 20, 30 ], s2: [] }
// The Length of the Queue is :-3


// 3) write a program check first string swap can make strings equal.


// function Swap(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     if (s1 === s2) return true;

//     let arr = [];
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) {
//             arr.push(i);
//         }
//     }

//     return arr.length === 2 &&
//         s1[arr[0]] === s2[arr[1]] &&
//         s1[arr[1]] === s2[arr[0]];
// }

// console.log(Swap("Meet", "Meet"));
// console.log(Swap("Nayan", "nayaN")); 
// console.log(Swap("abcd", "dcba"));

// Output =>

// true
// true
// false
