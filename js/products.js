//cargar los productos al local storage
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


//Levantar los productos
function renderProducts(){
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
                    <a href="#" class="btn btn-primary" onclick="addProductToCart(${product.id})">Add to cart</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("products").innerHTML = content;
}



function findProduct(id){
    const products = loadProductsLS();

    return products.find(item => item.id === id);
}

function addProductToCart(id){
    const cartProducts = loadCartProductsLS();
    const product = findProduct(id);

    cartProducts.push(product);
    addCartProductsLS(cartProducts);
    updateCartButton()
}


function updateCartButton(){
    const cartProducts = loadCartProductsLS();

    let amount = cartProducts.length;

    let content = 
        `<button type="button" class="btn btn-dark position-relative">
            Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${amount}
            </span>
        </button>`;

    document.getElementById("cartButton").innerHTML = content;
}


// llamadas a las funciones
renderProducts();
updateCartButton();