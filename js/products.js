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

//filtra los productos por la categoria seleccionada
/* function filterProducts(category){
    console.log(category);
    const products = loadProductsLS(); 

    let content = "";

    for (const product of products) {
        if(product.category === category){
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
        
    }

    document.getElementById("products").innerHTML = content;
} */


//Buscar un producto que se encuentra en el Local Storage
function findProduct(id){
    const products = loadProductsLS();

    return products.find(item => item.id === id);
}

//Agregar un producto al carrito
function addProductToCart(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    if (pos > -1){
        cartProducts[pos].amount += 1;
    } else{
        const product = findProduct(id);
        product.amount = 1;
        cartProducts.push(product);

    }


    addCartProductsLS(cartProducts);
    updateCartButton();
}

//Actualizamos el incremento del boton del carrito
function updateCartButton(){
    const cartProducts = loadCartProductsLS();

    let amount = cartProducts.length;

    let content = 
        `<button type="button" class="btn btn-dark position-relative">
            Go to cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                ${amount}
            </span>
        </button>`;

    document.getElementById("cartButton").innerHTML = content;
}


function showCategories(){
    const products = loadProductsLS(); 
    let categories = [];
    let content = "";

    for (const product of products) {
        if(!categories.includes(product.category)){
            content += 
            `<option value=""><a onclick="filterProducts(${product.category});">${product.category}</a></option>`;

            categories.push(product.category);
        } 
    }
    content += 
        `<option value=""><a onclick="renderProducts();">Todas las categorias</a></option>`;

    document.getElementById("categoriesSelect").innerHTML = content;
}


// llamadas a las funciones
renderProducts();
updateCartButton();
showCategories();