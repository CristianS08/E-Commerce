//categorizeProducts();

/* const soldProducts = []; */






//Agregar productos a la lista de los productos disponibles
/* function addProduct (Product){
    availableProducts.push(Product);
} */

//Agregar productos a la lista de productos vendidos
/* function sellProduct (Product){
    let indexSoldProduct = availableProducts.indexOf(Product)

    if(indexSoldProduct != 1) {
        availableProducts.slice(Product);

        soldProducts.push(Product.sell);
    }    
} */

// Buscar productos por el tipo
/* function findByType (type){
    let foundProducts = [];

    for (const product of availableProducts) {
        if (product.type == type){
            foundProducts.push(product);
        }
    }

    return foundProducts;
} */

// Buscar Productos por un rango de precio
/* function findByPrice (downPrice, topPrice){
    let foundProducts = [];

    for (const product of availableProducts) {
        if(product.price >= downPrice && product.price <= topPrice){
            foundProducts.push(product);
        }
    }

    return foundProducts;
} */










//registration

/* function registrationErrorMesage(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let last_name = document.getElementById("lastName");
    let error = "";

    if(email.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Email address</strong> no puede ir vacio </p>"
        document.getElementById("emailError").innerHTML = error;
    }
    
    error = "";

    if(password.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Password</strong> no puede ir vacio </p>"
        document.getElementById("passwordError").innerHTML = error;
    }

    error = "";

    if(name.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Name</strong> no puede ir vacio </p>"
        document.getElementById("nameError").innerHTML = error;
    }

    error = "";

    if(last_name.value == ""){
        error = "<p class = 'text-white bg-danger'> El campo <strong>Last name</strong> no puede ir vacio </p>"
        document.getElementById("lastNameError").innerHTML = error;
    }

    error = "";
}




let signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", registrationErrorMesage); */






// cuadro de texto del buscador
const searcher = document.querySelector('#searcher');
// boton del buscador
const searcherBtn = document.querySelector('#searcherBtn');

// funcion de prueba
function mostrar(){
    console.log("funciona");
}

// funcion que me guarda el valor del buscador en el localstorage
/* function saveSearcherValue(){

    const result = searcher.toUpperCase;
    localStorage.setItem("searcherValue", result);
} */

searcherBtn.addEventListener('click', mostrar());

//searcher.addEventListener('click', saveSearcherValue());


