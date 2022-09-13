//Levantar los productos del carrito, incluyendo los respectivos eventos en los botones
function renderCartProducts(){
    const products = loadCartProductsLS(); 

    let content = `
    <table class="table">
        <tr>
            <td class="text-end" colspan="6"><a href="#" class="btn btn-dark" onclick="warningMessageToEmptyCart();">Empty cart</a></td>
        </tr>`;

    for (const product of products) {
        content += 
        `
        <tr>
        <td class="text-start"><img src="images/${product.image}" alt="${product.name}" width="45" height = "45"> </td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><a href="#" class="btn btn-dark" onclick="deleteItem(${product.id});">-</a> ${product.amount} <a href="#" class="btn btn-dark" onclick="addItem(${product.id});">+</a></td>
        <td>$${product.price * product.amount}</td>
        <td class="text-end"><a href="#" class="btn btn-dark" onclick="warningMessageToDeleteProduct(${product.id});"><img src="images/trashBtn.png" alt="Delete" width="25"></a></td>
        </tr>`;
    }

    content += `
    <tr>
        <td colspan="4">Final price</td>
        <td><b>$${finalPrice()} </b></td>
    </tr>

    <tr>
            <td class="text-end" colspan="6"><a href="#" class="btn btn-dark" onclick="buyCart();" >checkout</a></td>
        </tr>
    </table>`;

    document.getElementById("products").innerHTML = content;
}

//Eliminar un producto del carrito
function deleteProductFromCart(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    if(cartProducts.length > 1){
        cartProducts.splice(pos, 1);
        addCartProductsLS(cartProducts);
        renderCartProducts(); 
    } else{
        cartProducts.splice(pos, 1);
        addCartProductsLS(cartProducts);
        emptyCartMessage();
    }
    
     
}

//Mensaje de advertencia para borrar un producto del carrito
function warningMessageToDeleteProduct(id){
    Swal.fire({
        title: 'Are you sure?',
        text: "you're going to delete the product!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        deleteProductFromCart(id);
        }
      })
}

//Mensaje de advertencia para vaciar el carrito
function warningMessageToEmptyCart(){
    Swal.fire({
        title: 'Are you sure?',
        text: "you're going empty the cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
        emptyCart();
        }
      })
}

//Resta en 1 la cantidad de un mismo producto en el carrito
function deleteItem(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    if (cartProducts[pos].amount>1){
        cartProducts[pos].amount -= 1;
        addCartProductsLS(cartProducts);
        renderCartProducts()
    }

}

//Suma en 1 la cantidad de un mismo producto en el carrito
function addItem(id){
    const cartProducts = loadCartProductsLS();
    let pos = cartProducts.findIndex(item => item.id === id);

    
    cartProducts[pos].amount += 1;
    addCartProductsLS(cartProducts);
    renderCartProducts()
}

//Calcula el precio final de los productos del carrito
function finalPrice(){
    const cartProducts = loadCartProductsLS();

    return cartProducts.reduce((acumulador, item) => acumulador + (item.amount * item.price), 0);
}

//Vacia el carrito, eliminando todos los productos 
function emptyCart(){
    localStorage.removeItem("productos_Carrito");
    
    emptyCartMessage();

}

//Mensaje cuando el carrito se encuentra vacio 
function emptyCartMessage(){
/* 
    let message = `<h2>El carrito esta vacio, no ha seleccionado ningun producto.</h2>`

    document.getElementById("emptyCartMessage").innerHTML = message; */

        Swal.fire({
            title: 'Empty cart',
            text: "The cart is empty, go back to products",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        }).then((result) => {
            emptyCart();
            if (result.isConfirmed) {
                window.location.href = "products.html";
            }
          }) 
}

// Vender los productos del carrito, primero lo vacia, los guarda en un nuevo arreglo y los quita del arreglo de los productos disponibles
function buyCart(){
    const cartProducts = loadCartProductsLS();
    let availableProducts = loadProductsLS();
    let soldProducts = loadSoldProductsLS();
    let pos;
    
    for (const product of cartProducts) {
        soldProducts.push(product);
        
        let id = product.id;
        pos = availableProducts.findIndex(item => item.id === id);
        availableProducts.splice(pos,1);
    }

    addSoldProductsLS(soldProducts);
    if(cartProducts.length != 0){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'The purchase has been made, thank you for trust in us!',
            showConfirmButton: true,
          }).then((result) => {
            emptyCart();
            if (result.isConfirmed) {
                window.location.href = "products.html";
            }
          }) 
    }

}


categorizeProducts();

const cartProducts = loadCartProductsLS();

cartProducts.length === 0  ? emptyCartMessage() : renderCartProducts();

