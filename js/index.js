
class Product{
    constructor(id, category, name, price, description, image){
        this.id = id;
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

const availableProducts = [
    new Product(1, "teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
    new Product(2, "monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
    new Product(3, "mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
    new Product(4, "teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
    new Product(5, "monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
    new Product(6, "mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
    new Product(7, "teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
    new Product(8, "monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
    new Product(9, "mouse", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg"),
    new Product(10, "teclado", "teclado", 10000, "Teclado de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado.jpg"),
    new Product(11, "monitor", "monitor", 20000, "Un monitor a tu medidaCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor.jpg"),
    new Product(12, "monitor", "mouse", 5000, "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.", "mouse.jpg")
];


//Agrego los productos disponibles al local storage
function addProductsLS(Products){
    localStorage.setItem("productos", JSON.stringify(Products));
}

//funcion para traer los productos disponibles cargados en el local storage
function loadProductsLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

addProductsLS(availableProducts);





/* const soldProducts = []; */









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




function categorizeProducts(){
    const products = loadProductsLS(); 
    let categories = [];
    let content = "";

    for (const product of products) {
        if(!categories.includes(product.category)){
            content += 
            `<li><a class="dropdown-item" href="#">${product.category}</a></li>`;

            categories.push(product.category);
        }
    }

    document.getElementById("categories").innerHTML = content;
}

categorizeProducts();


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