// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     delete() {
//         if (this.isEmpty()) {
//             return "Queue is Empty!";
//         }
//         return this.items.shift();
//     }
    
//     printQueue() {
//         console.log(this.items.join(" <- "));
//     }
// }

// let queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.printQueue();   

// queue.delete()
// queue.printQueue();  


// Doing Stack Task With Using Queue


// class Queue{
//     constructor(){
//         this.q1 = []
//         this.q2 = []
//     }

//     Add(ele){
//         this.q1.push(ele)
//     }


//     delete(){
//         while(this.q1.length > 1){
//             this.q2.push(this.q1.shift());
//         }
//         [this.q2 , this.q1] = [this.q1 , this.q2]
//         this.q2.shift()
//     }
// }

// let Que = new Queue();

// Que.Add(10);
// Que.Add(20);
// Que.Add(30);
// Que.Add(40);

// Que.delete();

// console.log(Que);