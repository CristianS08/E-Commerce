
class Product{
    constructor(id, category, name, price, description, image, amount){
        this.id = id;
        this.price = parseFloat(price);
        this.name = name.toUpperCase(name);
        this.image = image;
        this.description = description;
        this.sold = false;
        this.category = category;
        this.amount = 0;
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

//Agrego los productos del carrito al local storage
function addCartProductsLS(CartProducts){
    localStorage.setItem("productos_Carrito", JSON.stringify(CartProducts));
}

//funcion para traer los productos del carrito cargados en el local storage
function loadCartProductsLS(){
    return JSON.parse(localStorage.getItem("productos_Carrito")) || [];
}

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
    content += 
        `<li><a class="dropdown-item" href="#">Todas las categorias</a></li>`;

    document.getElementById("categories").innerHTML = content;
}

categorizeProducts();

addProductsLS(availableProducts);