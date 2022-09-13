
function createUser(){
    const userEmail = document.getElementById("email");
    const userPass = document.getElementById("password");
    const userName = document.getElementById("name");
    const userLastName = document.getElementById("lastName");

    let user = {name: userName.value, lastName: userLastName.value, email: userEmail.value, password: userPass.value};
    
    let users = loadUsersLS();
    users.push(user);
    addUsersLS(users);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡You are a new User!',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "login.html";
        }
      })

}




function registrationErrorMesage(){
    let flag = true;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;


    let emailError = document.getElementById("emailError");
    emailError.innerHTML = "";
    if(email.trim() == ""){
        flag = false;
        emailError.innerHTML = "<p class = 'text-white bg-danger'>Warning, The <strong>email</strong> field can't be empty</p>";
    }
   

    let passError = document.getElementById("passwordError");
    passError.innerHTML = "";
    if(password.trim() == ""){
        flag = false;
        passError.innerHTML = "<p class = 'text-white bg-danger'>Warning, The <strong>password</strong> field can't be empty</p>";
    }
    

    let nameError = document.getElementById("nameError");
    nameError.innerHTML = "";
    if(name.trim() == ""){
        flag = false;
        nameError.innerHTML = "<p class = 'text-white bg-danger'>Warning, The <strong>name</strong> field can't be empty</p>";
    }
    

    let lastNameError = document.getElementById("lastNameError");
    lastNameError.innerHTML = "";
    if(lastName.trim() == ""){
        flag = false;
        lastNameError.innerHTML = "<p class = 'text-white bg-danger'>Warning, The <strong>lastName</strong> field can't be empty</p>";
    }

    if (flag){
        createUser();
    }
    
}


let button = document.getElementById("signInButton");
button.addEventListener("click", registrationErrorMesage);
