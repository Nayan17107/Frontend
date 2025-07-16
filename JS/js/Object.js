// let person = {
//     name : "Nayan",
//     surname : "Prajapati",
//     age : "19",
//     hobbie : ['reading','writing','sleeping'],
//     address : {
//         area : "Kamrej",
//         city : "Surat",
//         state : "Gujrat",
//     }
// }
// // console.log(person);
// // console.log(person.hobbie[1]);
// // console.log(person.address.state);


// // For in loop

// // for(let i in person)
// // {
// //     console.log(`${i} => ${person[i]}`);
// // }


// // For of loop

// for(let i of person)
// {
//     console.log(person.hobbie);
// }


// Calling object with array.


let data = [
{
       quote:"Life isn’t about getting and having, it’s about giving and being.",
       author:"Kevin Kruse"
    },
{
       quote:"Whatever the mind of man can conceive and believe, it can achieve.",
       author:"Napoleon Hill"
    },
{
       quote:"Strive not to be a success, but rather to be of value.",
       author:"Albert Einstein"
    },
{
       quote:"Two roads diverged in a wood, And that has made all the difference.",
       author:"Robert Frost"
    },
{
       quote:"I attribute my success to this: I never gave or took any excuse.",
       author:"Florence Nightingale"
    },
{
       quote:"You miss 100% of the shots you donot take.",
       author:"Wayne Gretzky"
    }
]

console.log(data);

data.forEach(item => {
    console.log(item);
})

let index = 0;

let previous = (() => {
    if(index == 0){
        index = data.length - 1;
    }else{
        index--;
    }
    display()
})


let next = (() => {
    if(index == data.length - 1){
        index = 0;
    }else{
        index++; 
    }
    display()
})

let display = () => {
    document.getElementById("quote").innerHTML = data[index].quote;
    document.getElementById("author").innerHTML = data[index].author;
}
display();