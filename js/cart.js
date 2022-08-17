//Levantar los productos del carrito, incluyendo los respectivos eventos en los botones
function renderCartProducts(){
    const products = loadCartProductsLS(); 

    let content = `
    <table class="table">
        <tr>
            <td class="text-end" colspan="6"><a href="#" class="btn btn-dark" onclick="emptyCart();">Vaciar Carrito</a></td>
        </tr>`;

    for (const product of products) {
        content += 
        `
        <tr>
        <td class="text-start"><img src="images/${product.image}" alt="${product.name}" width="32"> </td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><a href="#" class="btn btn-dark" onclick="deleteItem(${product.id});">-</a>${product.amount}<a href="#" class="btn btn-dark" onclick="addItem(${product.id});">+</a></td>
        <td>$${product.price * product.amount}</td>
        <td class="text-end"><a href="#" class="btn btn-dark" onclick="deleteProductFromCart(${product.id});"><img src="images/trash.png" alt="Delete" width="32"></a></td>
        </tr>`;
    }

    content += `
    <tr>
        <td colspan="4">Final price</td>
        <td><b>$${finalPrice()} </b></td>
    </tr>
    </table>`;

    document.getElementById("products").innerHTML = content;
}

//Resta en 1 la cantidad de un mismo producto en el carrito
function deleteItem(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    if (cartProducts[pos].amount>1){
        cartProducts[pos].amount -= 1;
        addCartProductsLS(cartProducts);
        renderCartProducts()
        updateCartButton();
    }

}

//Suma en 1 la cantidad de un mismo producto en el carrito
function addItem(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    
    cartProducts[pos].amount += 1;
    addCartProductsLS(cartProducts);
    renderCartProducts()
    updateCartButton();
}

//Calcula el precio final de los productos del carrito
function finalPrice(){
    const cartProducts = loadCartProductsLS();

    return cartProducts.reduce((acumulador, item) => acumulador + (item.amount * item.price), 0);
}

//Vacia el carrito, eliminando todos los productos 
function emptyCart(){
    localStorage.removeItem("productos_Carrito");
    renderCartProducts()
    updateCartButton();
}


renderCartProducts();