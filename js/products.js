//Levantar los productos
function renderProducts(){
    const products = loadProductsLS(); 

    let filter = document.getElementById("categoriesSelect");
    filter.innerHTML = ""; 
    let item = document.createElement("option");
    item.onclick = () => {
        renderProducts();
    };
    item.innerHTML = "All products";
    filter.appendChild(item);

    let categories = [];
    let content = "";

    for (const product of products) {

        if(!categories.includes(product.category)){
            categories.push(product.category);
            let option = document.createElement("option");
            option.onclick = () => {
                filterProducts(product.category);
            };
            option.onchange = () => {
                filterProducts(product.category);
            };

            option.value = product.category;
            option.innerHTML = product.category;
            filter.appendChild(option);
        }
        

        content += 
        `<div class="col-md-3">
            <div class="card mb-3" >
                <img src="images/${product.image}" class="card-img-top w-100" style="height: 300px" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <a href="#" class="btn btn-primary" onclick="addProductToCart(${product.id})">Add to cart</a>
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails(${product.id})">Detail</a>
                </div>
            </div>
        </div>
        
        
            `;
        
    }

    document.getElementById("products").innerHTML = content;
}


//muestra un modal con los detalles del producto seleccionado
function showDetails(id){
    const product = findProduct(id);
    console.log(id);
    let modal = document.getElementById("productModal");

    document.getElementById("detailTitle").innerHTML = `<h5 class="modal-title">${product.name}</h5>`;
    
    let content = `
    <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
    <p class="card-text"><strong>$${product.price}</strong></p>
    <p class="card-text">${product.description}</p>`
    document.getElementById("detailBody").innerHTML = content;

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    
}


//filtra los productos por la categoria seleccionada
function filterProducts(category){

    const products = loadProductsLS(); 
    
    let content = "";

    for (const product of products) {
        if(product.category === category){
            content += 
            `<div class="col-md-3">
                <div class="card mb-3">
                    <img src="images/${product.image}" class="card-img-top w-100" style="height: 300px" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <a href="#" class="btn btn-primary" onclick="addProductToCart(${product.id})">Add to cart</a>
                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails(${product.id})">Detail</a>  
                    </div>
                </div>
            </div>`;
        }
        
    }

    document.getElementById("products").innerHTML = content;
}


//Buscar un producto que se encuentra en el Local Storage
function findProduct(id){
    const products = loadProductsLS();

    return products.find(item => item.id === id);
}

//Agregar un producto al carrito
function addProductToCart(id){
    if(validateLogin()){
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
    
}

//Actualizamos el incremento del boton del carrito
function updateCartButton(){
    let content = 
        `<button type="button" class="btn btn-dark position-relative" onclick="warningEmptyCartMessage()";>
            Go to cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             ${totalProducts()}
            </span>
        </button>`;

    document.getElementById("cartButton").innerHTML = content;
}

function totalProducts(){
    const cartProducts = loadCartProductsLS();
    
    return cartProducts.reduce((accumulator, item) => accumulator + item.amount , 0);
}

//Verifica que el usuario este logueado antes de comprar un producto
function validateLogin(){
    let flag = true;
    const user = loadUserSessionS();
    if(user.length == 0){
        flag = false;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to login to buy a product',
            footer: '<a href="login.html">Go to Login page?</a>'
          })
    }
    return flag;
}


function warningEmptyCartMessage(){

    cartProducts = loadCartProductsLS();
    if (cartProducts.length == 0){
        Swal.fire({
            title: 'Empty cart',
            text: "The cart is empty, you have to add a product.",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
    } else{
        window.location.href = "cart.html";
    }
    
    
}



// llamadas a las funciones
categorizeProducts();
renderProducts();
updateCartButton();
