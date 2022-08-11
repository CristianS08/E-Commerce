
class Product{
    constructor(category, name, price, description, image){
        this.price = parseFloat(price);
        this.name = name.toUpperCase(name);
        this.image = image;
        this.description = description;
        this.sold = false;
        this.category = category;
    }

    setIva() {
        this.price = this.price * 1.5;
    }

    sell(){
        this.sold = true;
    }

}

const availableProducts = [new Product("teclado", "teclado 2.0", 5000, "descripcion", "imagen.jpg")];


//Agrego los productos disponibles al local storage
function addProductsLS(Products){
    localStorage.setItem("productos", JSON.stringify(Products));
}

//funcion para traer los productos disponibles cargados en el local storage
function loadProductsLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

addProductsLS(availableProducts);
    
    /* new Product("teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg") */
/* new Product("monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
new Product("mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
new Product("teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
new Product("monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
new Product("mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
new Product("teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
new Product("monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
new Product("mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
new Product("teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
new Product("monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
new Product("monitor", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg") */




/* const soldProducts = [];




//Agrego los productos del carrito al local storage
function addCartProductsLS(CartProducts){
    localStorage.setItem("productos_Carrito", JSON.stringify(CartProducts));
}

//funcion para traer los productos del carrito cargados en el local storage
function loadCartProductsLS(){
    return JSON.parse(localStorage.getItem("productos_Carrito")) || [];
} */



//Levantar los productos
/* function renderProducts(){
    const products = loadProductsLS(); 

    let content = "";

    for (const product of products) {
        content += 
        `<div class="col-md-3">
            <div class="card">
                <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick"addProductToCart()">Add to cart</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("products").innerHTML = content;
} */


/* renderProducts(); */




//buscador dinamico
/* const searcher = document.querySelector('#searcher');

const filter = () => {
    const text = searcher.value.toLowerCase();

    for (const product of availableProducts) {
        let name = product.name.toLowerCase();
        if (name.indexOf(text) !==-1){
            //falta poner los resultados abajo del buscador
        }
    }
} */




/* function categorizeProducts(){
    const products = loadProductsLS(); 

    let content = "";

    for (const product of products) {
        content += 
        `<li><a class="dropdown-item" href="#">${product.category}</a></li>
        `;
    }

    document.getElementById("categories").innerHTML = content;
} */



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





//Log in 

/* function logInErrorMesage(){
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
button.addEventListener("click", logInErrorMesage); */




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