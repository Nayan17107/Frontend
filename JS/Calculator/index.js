let display = document.querySelector(".display");
let Button = document.querySelectorAll("button");
let string = "";

function storenum(value) {
    string = string + value;
    display.value = string;
}

let Result = ()=>{
    let Result = eval(string);
    display.value = Result;
}

let Cleardata = () =>{
    string = "";
    display.value = string;
}

let Back = () => {
    string = string.slice(0, string.length-1);
    display.value = string;
}

Button.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        let value = btn.textContent;


        if(value == "="){
            Result();
        }else if (value == "←"){
            Back();
        }else if (value == "C"){
            Cleardata();
        }else{
            storenum(value);
        }
    })
})