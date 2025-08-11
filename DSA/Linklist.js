// Types of Linklist

// 1) Singly Link List

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// class Singlylinklist{
//     constructor(){
//         this.head = null;
//     }

//     appendData(val){
//         let temp = new Node(val);

//         if(this.head == null){
//             this.head = temp;
//         }
//         else{
//             let current = this.head;

//             while (current.next != null) {
//                 current = current.next;
//             }

//             current.next = temp;
//         }
//     }

//     removeData(){
//         if(this.head == null){
//             console.log("Now Everything is Empty");
//         }
//         else if(this.head.next == null){
//             this.head = null;
//         }
//         else{
//             let current = this.head;
//             let prev;

//             while(current.next != null){
//                 prev = current;
//                 current = current.next;
//             }
//             prev.next = null;
//         }
//     }

//     displayData(){
//         if(this.head == null){
//             console.log("List is Empty...");
//         }
//         else{
//             let current = this.head;
//             let data = "";

//             while (current) {
//                 data += current.data + " -> ";
//                 current = current.next;
//             }
//             console.log(data);
//         }
//     }
// };

// let singlylinklist = new Singlylinklist();


// singlylinklist.appendData(10);
// singlylinklist.appendData(20);
// singlylinklist.appendData(30);
// singlylinklist.appendData(40);
// singlylinklist.appendData(50);

// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();

// singlylinklist.displayData();


// Reverce The Singly Link List 


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// class Singlylinklist {
//     constructor() {
//         this.head = null;
//     }

//     appendData(val) {
//         let temp = new Node(val);

//         if (this.head == null) {
//             this.head = temp;
//         }
//         else {
//             let current = this.head;

//             while (current.next != null) {
//                 current = current.next;
//             }

//             current.next = temp;
//         }
//     }


//     displayData() {
//         if (this.head == null) {
//             console.log("List is Empty...");
//         }
//         else {
//             let current = this.head;
//             let data = "";

//             while (current) {
//                 data += current.data + " -> ";
//                 current = current.next;
//             }
//             console.log(data);
//         }
//     }

    // recerseData() {
    //     let previos = null;
    //     let curr = this.head;

    //     while (curr) {
    //         let next = curr.next;  
    //         curr.next = previos;      
    //         previos = curr;           
    //         curr = next;           
    //     }

    //     this.head = previos; 
    // }

//     revrse() {
//         let current = this.head
//         let arr = []

//         while (current != null) {
//             arr.push(current.data)
//             current = current.next
//         }

//         this.head = null;

//         for (let i = arr.length - 1; i >= 0; i--) {
//             this.appendData(arr[i])
//         }
//     }
// };

// let singlylinklist = new Singlylinklist();


// singlylinklist.appendData(10);
// singlylinklist.appendData(20);
// singlylinklist.appendData(30);
// singlylinklist.appendData(40);
// singlylinklist.appendData(50);

// console.log("Original List:");
// console.log("");
// singlylinklist.displayData();

// singlylinklist.revrse();
// console.log("");

// console.log("Reversed List:");
// console.log("");
// singlylinklist.displayData();



// Delete Element Without Deleting Head



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// class Singlylinklist {
//     constructor() {
//         this.head = null;
//     }

//     appendData(val) {
//         let temp = new Node(val);

//         if (this.head == null) {
//             this.head = temp;
//         }
//         else {
//             let current = this.head;

//             while (current.next != null) {
//                 current = current.next;
//             }

//             current.next = temp;
//         }
//     }

//     displayData() {
//         if (this.head == null) {
//             console.log("List is Empty...");
//         }
//         else {
//             let current = this.head;
//             let data = "";

//             while (current) {
//                 data += current.data + " -> ";
//                 current = current.next;
//             }
//             console.log(data);
//         }
//     }

//     removeData() {
//         if (this.head == null) {
//             console.log("It's Empty...");
//         }

//         if (this.head.next == null) {
//             console.log("We Can't Delete The Node");
//             return;
//         }

//         let current = this.head;
//         let prev = null;

//         while (current.next != null) {
//             prev = current;
//             current = current.next;
//         }
//         prev.next = null;
//     }
// };

// let singlylinklist = new Singlylinklist();


// singlylinklist.appendData(10);
// singlylinklist.appendData(20);
// singlylinklist.appendData(30);
// singlylinklist.appendData(40);
// singlylinklist.appendData(50);

// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.displayData();
