// Timming Function -> It is Used to Delay the Exicution of a Web Page

// Types of Timming Function :

// 1) setTimeout()
// 2) setInterval()
// 3) clearTimeout()
// 4) clearInterval()


// 1) setTimeout() :-

// setTimeout( () => {

// let name = "Prajapati Nayan";

// document.querySelector("#name").innerHTML = name;

// }, 3000)

// 2) setInterval() :-

// setInterval(() => {
// let currentDate = new Date();
// let date = currentDate.toLocaleTimeString();

// document.querySelector("#name").innerHTML = date;
// } ,1000)


// 3) clearTimeout() :-

// let stop = setTimeout( () => {

// let name = "Prajapati Nayan";
// document.querySelector("#name").innerHTML = name;

// }, 3000)
// clearTimeout(stop);


// 4) clearInterval() :-

// let stop = setInterval(() => {
// let currentDate = new Date();
// let date = currentDate.toLocaleTimeString();

// document.querySelector("#name").innerHTML = date;
// clearInterval(stop);
// } ,1000)



// Next Birthday counter 



// function Counter() {
//     let now = new Date();
//     let nextBday = new Date("2026-05-25 00:00:00");

//     let diffMs = nextBday - now;

//     if (diffMs < 0) {
//         document.getElementById("day").textContent = 0;
//         document.getElementById("hour").textContent = 0;
//         document.getElementById("minute").textContent = 0;
//         document.getElementById("second").textContent = 0;
//         return;
//     }

//     let diffSec = Math.floor(diffMs / 1000);

//     let sec = diffSec % 60;
//     let totalMin = Math.floor(diffSec / 60);
//     let min = totalMin % 60;
//     let totalHr = Math.floor(totalMin / 60);
//     let hr = totalHr % 24;
//     let day = Math.floor(totalHr / 24);

//     document.getElementById("day").textContent = day;
//     document.getElementById("hour").textContent = hr;
//     document.getElementById("minute").textContent = min;
//     document.getElementById("second").textContent = sec;
// }

// setInterval(Counter, 1000);



// AutoMatic Slider



// let i = [
//     {
//         img:  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//         img:  "https://www.carpro.com/hs-fs/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg?width=1020&name=2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg"
//     },
//     {
//         img: "https://www.cnet.com/a/img/resize/bddd6ff24cf51ee5f4aabfd3157ef1901d959658/hub/2016/12/19/dae31bef-3d6c-42a9-a75c-6f40751108a9/2017-lamborghini-aventador-roadster-86.jpg?auto=webp&width=1200"
//     }
// ]


// let index = 0;

// let previous = (() => {
//     if(index == 0){
//         index = i.length - 1;
//     }else{
//         index--;
//     }
//     display()
// })


// let next = (() => {
//     if(index == i.length - 1){
//         index = 0;
//     }else{
//         index++; 
//     }
//     display()
// })

// let display = () => {
//     document.getElementById("img").src = i[index].img;
// }
// display();  

// setInterval(next,1000)