document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();
    let Name = $("#fname");
    let email = $("#email");
    let password = $("#password");
    let Phone = $("#phone");

    if (Name.val() == "") {
        Name.attr("placeholder", "Enter Your Name");
    }
    if (email.val() == "") {
        email.attr("placeholder", "Enter Your email");
    }
    if (password.val() == "") {
        password.attr("placeholder", "Enter Your password");
    } else {
        let passvalidation = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()\-=+{}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()\-=+{}\[\]|\\:;"'<>,.?/_₹]{6,10}$/;
        if (!passvalidation.test(password.val())) {
            password.css("border", "1px solid red");
        }
    }

    if (Phone.val() == "") {
        Phone.attr("placeholder", "Enter Your Phone No");
    }
});
