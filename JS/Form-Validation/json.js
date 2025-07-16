let Form = document.querySelector("#registerForm");
let List = document.querySelector("#usersList tbody");
let Edit = document.querySelector(".edit-btn");
let Delete = document.querySelector(".delete-btn");

let editform = document.querySelector("#editForm");
let editName = document.getElementById("editfname");
let editemail = document.getElementById("editemail");
let editpassword = document.getElementById("editpassword");
let editPhone = document.getElementById("editphone");

let editIndex = null;

Form.addEventListener('submit', (event) => {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    event.preventDefault()
    let Name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let Phone = document.getElementById("phone").value;


    let newUser = {
        Name: Name,
        Email: email,
        Password: password,
        Phone: Phone
    };

    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    Form.reset();
    DisplayData();
});

function DisplayData() {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let data = ""
    users.forEach((user, index) => {
        let i = `
            <tr>
                <td>${index}</td>
                <td>${user.Name}</td>
                <td>${user.Email}</td>
                <td>${user.Phone}</td>
                <td>
                    <button type="button" class="edit-btn" onclick="editData(${index})">Edit</button>
                    <button type="button" class="delete-btn" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `
        data += i;
    });
    List.innerHTML = data;
}
DisplayData();

// Delete Data

function deleteData(id){
    let users = JSON.parse(localStorage.getItem("Users"));
    users.splice(id, 1);
    localStorage.setItem("Users", JSON.stringify(users));
    DisplayData();
}


// Edit Data

function editData(id){

    let users = JSON.parse(localStorage.getItem("Users"));
    let data = users[id];
    
    document.getElementById("regform").style.display = "none"
    document.getElementById("edform").style.display = "block"

    editName.value = data.Name;
    editemail.value = data.Email;
    editpassword.value = data.Password;
    editPhone.value = data.Phone;

    editIndex = id;
}

// Update data in localStorage

editform.addEventListener('submit', (event) => {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("Users"));

    users[editIndex] = {
        Name: editName.value,
        Email: editemail.value,
        Password: editpassword.value,
        Phone: editPhone.value
    };

    localStorage.setItem("Users", JSON.stringify(users));
    Form.reset();
    DisplayData();

    document.getElementById("regform").style.display = "block"
    document.getElementById("edform").style.display = "none"

    editIndex = null;
});
