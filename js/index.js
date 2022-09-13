
//funcion que me guarda el valor del buscador en el localstorage
function saveSearcherValue(text){
    console.log(text);
    localStorage.setItem("searcherValue", text);
}


function renderLastSearches(){
    const products = loadFoundProductsLS();
    let content = "";

    for (const product of products) {
        content += 
            `<div class="col-md-3">
                <div class="card mb-3">
                    <img src="images/${product.image}" class="card-img-top w-100" style="height:300px" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <a href="#" class="btn btn-primary" onclick="searchIndexProduct(${product.name})">Search</a>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById("products").innerHTML = content;
}

/* //Funcion que me redirige a foundProducts.html con el producto seleccionado
function searchIndexProduct(name){
    console.log(name);
    localStorage.setItem("searcherValue", name);
} */

// valor de cuadro de texto del buscador
searcherText = document.getElementById("searcher");
// boton del buscador y llamada a la funcion
document.getElementById("searcherBtn").onchange  = saveSearcherValue(searcherText.value);


categorizeProducts();
//changeLogInButton();
renderLastSearches();



