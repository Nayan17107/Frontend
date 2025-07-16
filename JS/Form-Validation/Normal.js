document.querySelector("form").addEventListener('submit', (event) =>{
    event.preventDefault()
    let Name = document.getElementById("fname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let Phone = document.getElementById("phone");

    if(Name.value == ""){
        Name.setAttribute("placeholder", "Enter Your Name");
    }
    if(email.value == ""){
        email.setAttribute("placeholder", "Enter Your email");
    }
    if(password.value == ""){
        password.setAttribute("placeholder", "Enter Your password");
    }else{
        let passvalidation = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,10}$/;
        if(!passvalidation.test(password.value)){
            password.style("Border", "1px solid red");
        }
    }

    if(Phone.value == ""){
        Phone.setAttribute("placeholder", "Enter Your Phone No");
    }
})