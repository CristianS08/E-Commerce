
class Product{
    constructor(type, price, description, image){
        this.price = parseFloat(price);
        this.type = type.toUpperCase(type);
        this.image = image;
        this.description = description;
        this.sold = false;
    }

    setIva() {
        this.price = this.price * 1.5;
    }

    sell(){
        this.sold = true;
    }

}

const availableProducts = [];
const soldProducts = [];

//Agregar productos a la lista de los productos disponibles
function addProduct (Product){
    availableProducts.push(Product);
}

//Agregar productos a la lista de productos vendidos
function sellProduct (Product){
    let indexSoldProduct = availableProducts.indexOf(Product)

    if(indexSoldProduct != 1) {
        availableProducts.slice(Product);

        soldProducts.push(Product.sell);
    }    
}

// Buscar productos por el tipo
function findByType (type){
    let foundProducts = [];

    for (const product of availableProducts) {
        if (product.type == type){
            foundProducts.push(product);
        }
    }

    return foundProducts;
}

// Buscar Productos por un rango de precio
function findByPrice (downPrice, topPrice){
    let foundProducts = [];

    for (const product of availableProducts) {
        if(product.price >= downPrice && product.price <= topPrice){
            foundProducts.push(product);
        }
    }

    return foundProducts;
}