// Insert, Update and Delete in singlylinklist

// class cnode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class circularList {
//     constructor() {
//         this.head = null;
//         this.last = null;
//     }

//     apddend(val) {
//         let temp = new cnode(val);
//         if (this.head == null) {
//             this.head = temp;
//             this.last = temp;
//             this.last.next = this.head;
//         } else {
//             this.last.next = temp;
//             temp.next = this.head;
//             this.last = temp;
//         }
//     }

//     deleteData() {
//         let currnt = this.head;
//         let previus = null;

//         if (this.head == this.last) {
//             this.head = null;
//             this.last = null;
//         } else {
//             while (currnt !== this.last) {
//                 previus = currnt;
//                 currnt = currnt.next;
//             }

//             previus.next = this.head;
//             this.last = previus;
//         }
//     }

//     displayData() {
//         let currnt = this.head;
//         if (this.head == null) {
//             console.log("List Empty");
//             return;
//         }

//         do {
//             console.log(currnt.data);
//             currnt = currnt.next;
//         } while (currnt !== this.head);
//     }
// }

// let circular = new circularList();
// circular.apddend(10);
// circular.apddend(20);
// circular.apddend(30);
// circular.apddend(40);
// circular.apddend(50);
// circular.deleteData();
// circular.deleteData();

// circular.displayData();

// Output -> 

// 10
// 20
// 30



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

// Output -> 

// Original List:

// 10 -> 20 -> 30 -> 40 -> 50 -> 

// Reversed List:

// 50 -> 40 -> 30 -> 20 -> 10 -> 


// WAP to Check linklist is palindrome or not.


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

//     removeData() {
//         if (this.head == null) {
//             console.log("Now Everything is Empty");
//         }
//         else if (this.head.next == null) {
//             this.head = null;
//         }
//         else {
//             let current = this.head;
//             let prev;

//             while (current.next != null) {
//                 prev = current;
//                 current = current.next;
//             }
//             prev.next = null;
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

//     isPalindrome() {
//         let current = this.head;
//         let arr = [];

//         while (current) {
//             arr.push(current.data);
//             current = current.next;
//         }

//         let start = 0;
//         let end = arr.length - 1;
//         while (start < end) {
//             if (arr[start] !== arr[end]) {
//                 console.log("It's Not a Palindrome");
//                 return
//             }
//             start++
//             end--
//         }
//         console.log("It is Palindrome");
//     }
// };

// let singlylinklist = new Singlylinklist();


// singlylinklist.appendData(10);
// singlylinklist.appendData(20);
// singlylinklist.appendData(30);
// singlylinklist.appendData(20);
// singlylinklist.appendData(10);

// singlylinklist.displayData();

// singlylinklist.isPalindrome();

// Output ->

// 10 -> 20 -> 30 -> 20 -> 10 -> 
// It is Palindrome
