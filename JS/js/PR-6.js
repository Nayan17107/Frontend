let i = [
    {
        img:  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        img:  "https://www.carpro.com/hs-fs/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg?width=1020&name=2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg"
    },
    {
        img: "https://www.cnet.com/a/img/resize/bddd6ff24cf51ee5f4aabfd3157ef1901d959658/hub/2016/12/19/dae31bef-3d6c-42a9-a75c-6f40751108a9/2017-lamborghini-aventador-roadster-86.jpg?auto=webp&width=1200"
    }
]


let index = 0;

let previous = (() => {
    if(index == 0){
        index = i.length - 1;
    }else{
        index--;
    }
    display()
})


let next = (() => {
    if(index == i.length - 1){
        index = 0;
    }else{
        index++; 
    }
    display()
})

let display = () => {
    document.getElementById("img").src = i[index].img;
}
display();