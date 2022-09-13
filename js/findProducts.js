

//buscador dinamico
function dinamicSearcher(){
    const products = loadProductsLS();
    const foundProducts = loadFoundProductsLS();
    console.log(products);
    console.log(foundProducts);

    let text = localStorage.getItem("searcherValue");
    text = text.toUpperCase();

    let content = "";
    console.log(text);

    for (const product of products) {
        let name = product.name.toUpperCase();

        if (name.indexOf(text) !==-1){
            if(!foundProducts.includes(name) ){
                if(foundProducts.length < 8){
                    foundProducts.unshift(product);
                } else{
                    foundProducts.splice(6,1);
                    foundProducts.unshift(product);
                }
            }
                
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

    addFoundProductsLS(foundProducts);
    document.getElementById("products").innerHTML = content;
}


dinamicSearcher();