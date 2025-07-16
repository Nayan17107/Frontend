let Button = document.querySelector("#balbtn");

Button.addEventListener("click", () => {
    let balInput = document.querySelector("#Balance");
    let bal = balInput.value;
    let bale = document.querySelector("#bal").value;
    let exp = document.querySelector("#exp").value;
    let left = document.querySelector("#left").value;

    let expname = document.querySelector("#Expensename").value;
    let expammount = document.querySelector("#Expenseammount").value;

    if (bal < 0 || bal === "") {
        balInput.value = ""; 
        balInput.setAttribute("placeholder","Enter Your Budget!!!");
    }else{
        left.innerHTML = bal.value;
    }

})
