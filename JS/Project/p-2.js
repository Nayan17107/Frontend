let Convert = document.querySelector("#convert").addEventListener('click', () => {
let str = document.querySelector("#str").value;
let ans = document.querySelector("#ans");

if(str === ""){
    ans.textContent = "Enter The String";
}else{
    let count = str.length;
    ans.textContent = ` The Total String is :- ${count}`;
}
})