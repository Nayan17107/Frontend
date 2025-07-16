//  JSON Introduction = Javascript object Notation
// Json Object can only defined in = "" (string)


// defination :-


// js obj 

//  let a = { Name : "Nayan"; }

// json obj 

// let a = { "Name" : "Nayan"; }



// Mathods to convert js or json object 


// 1) Stringify();   - convert js obj into json obj
// 2) parse();    - convert json obj into js obj


// 1) Stringify();

// let person1 = {
//     Name : "Prajapati Nayan",
//     Age : 19,
//     Email : "nayan17107@gmail.com"
// }

// console.log(person1);
// let data = JSON.stringify(person1);
// console.log(data);


// 2) parse();

// let person2 = `{
//     "Name" : "Prajapati Nayan",
//     "Age" : 19,
//     "Email" : "nayan17107@gmail.com"
// }`

// console.log(person2);
// let data = JSON.parse(person2);
// console.log(data);


// Storeing The Data in Local & Session Storage


// Local Storage 

// let i = {
//     Name : "Prajapati Nayan",
//     Age : 19,
//     Email : "nayan17107@gmail.com"
// }

// let data = JSON.stringify(i);
// localStorage.setItem("Details",data);


// Sesson Storage 

// let i = `{
//     "Name" : "Prajapati Nayan",
//     "Age" : 19,
//     "Email" : "nayan17107@gmail.com"
// }
// `
// sessionStorage.setItem("Details",i);



// Show the data into html without creating tags using Append


// let data = {
//     Name : "Prajapati Nayan",
//     Age : 19,
//     Email : "nayan@123.gmail.com",
//     No : 9714427555
// }

// let obj = JSON.stringify(data);

// localStorage.setItem("Details",obj);

// let abc = localStorage.getItem("Details");

// let p = document.createElement('p')
// p.innerHTML = abc;

// document.querySelector("body").append(p)