
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
    new Product(1, "Teclado", "EXO Mk806", 4999, "teclado EXO de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado1.jpg"),
    new Product(2, "Teclado", "Redragon Magic Wand", 11399, "marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.", "teclado2.jpg"),
    new Product(3, "Teclado", "T-Dagger Arena T-TGK321", 4272, "Este teclado T-Dagger de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.", "teclado3.jpg"),
    new Product(4, "Mouse", "Logitech G Series Hero", 8805, "Utiliza cable, posee rueda de desplazamiento, cuenta con 11 botones para un mayor control, con sensor óptico, resolución de 16000dpi, control inteligente y navegación fácil.", "mouse1.jpg"),
    new Product(5, "Mouse", "Redragon Centrophorus2", 2499, "Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.", "mouse2.jpg"),
    new Product(6, "Mouse", "Genius NX-7000", 1670, "El mouse Genius se caracteriza por suaves curvas que resultan cómodas para cualquier mano. Gracias a su resolución, conseguirás movimientos precisos en una amplia gama de superficies.", "mouse3.jpg"),
    new Product(7, "Auriculares", "HyperX Cloud Stinger", 7828, "El formato perfecto para vos. El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.", "auris1.jpg"),
    new Product(8, "Auriculares", "Logitech G Series G435", 14099, "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.", "auris2.jpg"),
    new Product(9, "Auriculares", "Redragon Zeus X", 12995, "Con cancelación de ruido, micrófono flexible incorporado, tipo de conector: USB, sonido superior y sin límites, cómodos y prácticos.", "auris3.jpg"),
    new Product(10, "Monitor", "Samsung F24T35", 54599, "Un monitor a tu medida. Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.", "monitor1.jpg"),
    new Product(11, "Monitor", "AOC Agon G2490VX LCD", 59999, "Este monitor de 23.8 te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.", "monitor2.jpg"),
    new Product(12, "Monitor", "Philips V 193V5LHSB2", 32499, "Pantalla LCD de 18.5, Tiene una resolución de 1366px-768px, Relación de aspecto de 16:9, Panel TFT, Su brillo es de 200cd/m², Tipos de conexión: VGA/D-Sub, HDMI.", "monitor3.jpg"),
    new Product(13, "Notebook", "Dell Inspiron 3515", 157999, "AMD Ryzen 7 3700U 8GB de RAM 512GB SSD, AMD Radeon RX Vega 10 60 Hz 1920x1080px Windows 11 Home", "notebook1.jpg"),
    new Product(14, "Notebook", "Asus Rog Strix", 369999, "39,6 cm Full HD AMD Ryzen™ 7 6800H 16 GB DDR5-SDRAM 512 GB SSD NVIDIA GeForce RTX 3060 Wi-Fi 6E (802.11ax) Windows 11 Home Negro, Gris", "notebook2.jpg"),
    new Product(15, "Notebook", "Asus Vivobook 15", 169999, "ordenador portátil 1240P Ultrabook 39,6 cm (15.6) Full HD Intel Core I5 8 GB DDR4-SDRAM 256 GB SSD Wi-Fi 5 (802.11ac) Windows 11 Home Quiet Blue", "notebook3.jpg"),
];


//Agrego los productos disponibles al local storage
function addProductsLS(Products){
    localStorage.setItem("productos", JSON.stringify(Products));
}

//funcion para traer los productos disponibles cargados en el local storage
function loadProductsLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

//Agrego los productos vendidos al local storage
function addSoldProductsLS(Products){
    localStorage.setItem("soldProducts", JSON.stringify(Products));
}

//funcion para traer los productos vendidos cargados en el local storage
function loadSoldProductsLS(){
    return JSON.parse(localStorage.getItem("soldProducts")) || [];
}

//Agrego los productos del carrito al local storage
function addCartProductsLS(CartProducts){
    localStorage.setItem("productos_Carrito", JSON.stringify(CartProducts));
}

//funcion para traer los productos del carrito cargados en el local storage
function loadCartProductsLS(){
    return JSON.parse(localStorage.getItem("productos_Carrito")) || [];
}

//Agrego los productos encontrados mediante el buscador
function addFoundProductsLS(foundProducts){
    localStorage.setItem("foundProductos", JSON.stringify(foundProducts));
}

//funcion para traer los productos encontrados en el buscador y guardados en el LS
function loadFoundProductsLS(){
    return JSON.parse(localStorage.getItem("foundProductos")) || [];
}

//Agrego los usuarios registrados al LS
function addUsersLS(users){
    localStorage.setItem("users", JSON.stringify(users));
}

//funcion para traer los usuarios registrados
function loadUsersLS(){
    return JSON.parse(localStorage.getItem("users")) || [];
}

//Agrego el usuario a la sesion
function addUserSessionS(users){
    sessionStorage.setItem("users", JSON.stringify(users));
}

//funcion para traer el usuario de la sesion
function loadUserSessionS(){
    return JSON.parse(sessionStorage.getItem("users")) || [];
}

//Genera las categorias de los productos en el nav 
function categorizeProducts(){
    const products = loadProductsLS(); 
    let categories = [];
    let content = "";

    for (const product of products) {
        if(!categories.includes(product.category)){
            content += 
            `<li><a class="dropdown-item" href="products.html" onclick="filterProducts(${product.category})";>${product.category}</a></li>`;

            categories.push(product.category);
        }
    }
    content += 
        `<li><a class="dropdown-item" href="#">Todas las categorias</a></li>`;

    document.getElementById("categories").innerHTML = content;
}



/* function changeLogInButton(opt){
    let login = document.getElementById("login");
    if(opt == 1){
        login.innerHTML = '<a class="nav-link" href="login.html" >Log in</a>';
    } else{
        login.innerHTML = '<a class="nav-link" href="login.html" >Log out</a>';
    }
    
} */





/* changeLogInButton(); */
addProductsLS(availableProducts);
