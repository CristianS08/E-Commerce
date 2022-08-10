/* 
class Product{
    constructor(type, price, description, image){
        this.price = parseFloat(price);
        this.type = type.toUpperCase(type);
        this.image = image;
        this.description = description;
        this.sold = false;
    }

    setIva() {
        this.price = this.price * 1.5;
    }

    sell(){
        this.sold = true;
    }

}

const availableProducts = [];
const soldProducts = [];

//Agregar productos a la lista de los productos disponibles
function addProduct (Product){
    availableProducts.push(Product);
}

//Agregar productos a la lista de productos vendidos
function sellProduct (Product){
    let indexSoldProduct = availableProducts.indexOf(Product)

    if(indexSoldProduct != 1) {
        availableProducts.slice(Product);

        soldProducts.push(Product.sell);
    }    
}

// Buscar productos por el tipo
function findByType (type){
    let foundProducts = [];

    for (const product of availableProducts) {
        if (product.type == type){
            foundProducts.push(product);
        }
    }

    return foundProducts;
}

// Buscar Productos por un rango de precio
function findByPrice (downPrice, topPrice){
    let foundProducts = [];

    for (const product of availableProducts) {
        if(product.price >= downPrice && product.price <= topPrice){
            foundProducts.push(product);
        }
    }

    return foundProducts;
} */





//Log in 

function logInErrorMesage(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
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
    
}

let button = document.getElementById("button")
button.addEventListener("click", logInErrorMesage);




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