// Insert, Update and Delete in singlylinklist


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

