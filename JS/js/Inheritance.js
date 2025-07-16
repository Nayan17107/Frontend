// Inheritance => Parent class Property can be accessed in child class calld as a Inheritance.


// Types of Inheritance ->

// 1) Smple (Single)
// 2) Multilevel
// 3) Hierarchical
// 4) Multiple
// 5) Hybrid


// All the Inheritance can called in child class with using only super() key word.

// super() -> Parent class constructor (variable) can call in child class.


// // Ex -> 

// class Person{
//     constructor(name , surname){
//         this.name =name;
//         this.surname =surname;
//     }

//     getdata(){
//         console.log(`Persone name is ${this.name} and surname is ${this.surname}`);
//     }
// }

// class About extends Person{
//     constructor(name, surname, age){
//         super(name, surname)
//         this.age = age;
//     }
    
//     getdetails(){
//         console.log(`Persone age is ${this.age}`);
//     }
// }

// let obj = new Person("Nayan", "Prajapati");

// obj.getdata();

// let a = new About("Nayan", "Prajapati","19");

// a.getdetails();



// Abstration => We can private our variable with using Abstration and by using - #


// class Person{
//     #name = "Prajapati Nayan";
//     #email = "prajapatinayan17107@gmail.com";

//     getdata(){
//         console.log(`Person's Name is ${this.#name} And His Email is ${this.#email}.`);   
//     }
// }

// let obj = new Person();

// obj.name;
// obj.getdata();