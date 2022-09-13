
function logInErrorMesage(){
    let flag = true;
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let emailError = document.getElementById("emailError");
    emailError.innerHTML = "";
    if(email.value == ""){
        emailError.innerHTML = "<p class = 'text-white bg-danger'> The <strong>Email address</strong> field can't be empty </p>"
        flag = false;
    }
    
    let passError = document.getElementById("passwordError");
    passError.innerHTML = "";
    if(password.value == ""){
        passError.innerHTML = "<p class = 'text-white bg-danger'>The <strong>Password</strong> field can't be empty </p>";
        flag = false;
    }

    let emailPassError = document.getElementById("emailPasswordError");
    emailPassError.innerHTML = "";
    if (flag){
        if(userConfirmation(email.value, password.value)){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Wellcome!',
                showConfirmButton: true,
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "index.html";
                }
              })
        }else{
            emailPassError.innerHTML = "<p class = 'text-white bg-danger'> Email or Password are not correct </p>"
        }
    }
    
}

function userConfirmation(email, pass){
    let flag = false;
    let id = "";
    const users = loadUsersLS();

    for (const user of users) {
        if (user.email == email && user.password == pass){
            flag = true;
            addUserSessionS(user);
        }
    }

    return flag;
}


categorizeProducts();
let button = document.getElementById("button")
button.addEventListener("click", logInErrorMesage);