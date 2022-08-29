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
            <div class="card">
                <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
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

    const content = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${product.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
                    ${product.description}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById("modal").innerHTML = content;
}

//filtra los productos por la categoria seleccionada
function filterProducts(category){

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
}

/* function showCategories(){
    const products = loadProductsLS(); 
    let categories = [];
    let content = "";

    for (const product of products) {
        if(!categories.includes(product.category)){
            content += 
            `<option onclick="filterProducts(${product.category});">${product.category}</option>`;

            categories.push(product.category);
        } 
    }
    content += 
        `<option value=""><a onclick="renderProducts();">Todas las categorias</a></option>`;

    document.getElementById("categoriesSelect").innerHTML = content;
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
    let content = 
        `<button type="button" class="btn btn-dark position-relative">
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


//buscador dinamico
function dinamicSearcher(){
    const products = loadProductsLS();
    const text = localStorage.getItem("searcherValue");
    let content = "";
    console.log(text);

    for (const product of products) {
        let name = product.name.toUpperCase();

        if (name.indexOf(text) !==-1){
            
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
}


dinamicSearcher();


// llamadas a las funciones
renderProducts();
updateCartButton();
//categorizeProducts();