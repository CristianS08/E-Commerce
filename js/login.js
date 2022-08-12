
function logInErrorMesage(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error = "";

    if(email.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Email address</strong> no puede ir vacio </p>"
        document.getElementById("emailError").innerHTML = error;
    } else{
        error = "";
    }
    
    

    if(password.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Password</strong> no puede ir vacio </p>"
        document.getElementById("passwordError").innerHTML = error;
    }
    else{
        error = "";
    }
    
}

let button = document.getElementById("button")
button.addEventListener("click", logInErrorMesage);