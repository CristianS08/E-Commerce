
function registrationErrorMesage(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastName");
    let error = "";

    if(email.value == ""){
        error = "El campo Email address no puede ir vacio"
        errorMessage(error);
 //       document.getElementById("emailError").innerHTML = error;
    } else{
        error = "";
    }
    

    if(password.value == ""){
        error = "El campo Password no puede ir vacio"
        errorMessage(error);
//        document.getElementById("passwordError").innerHTML = error;
    }
    else{
        error = "";
    }

    if(name.value == ""){
        error = "El campo Name no puede ir vacio"
        errorMessage(error);
 //       document.getElementById("nameError").innerHTML = error;
    }
    else{
        error = "";
    }

    if(lastName.value == ""){
        error = "El campo Last Name no puede ir vacio"
        errorMessage(error);
  //      document.getElementById("lastNameError").innerHTML = error;
    }
    else{
        error = "";
    }
    
}

/* "<p class = 'text-white bg-danger'> El campo <strong>Password</strong> no puede ir vacio </p>" */

/* function successfullRegistration(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
} */

function errorMessage(error){
    Toastify({
        text: error,
        duration: 5000,
        stopOnFocus: true,
        position: "center",
        style: {
          background: "linear-gradient(#00b09b, #96c93d)",
        }
      }).showToast();
}

let button = document.getElementById("signInButton")
button.addEventListener("click", registrationErrorMesage);