"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product1 = {
    name: 'T-Shirt',
    price: 2000,
    inventory: {
        stock: 100,
        colorOptions: ['red', 'blue', 'green']
    }
};
const product2 = {
    name: 'Jeans',
    price: 4000,
    inventory: {
        stock: 50,
        colorOptions: ['blue', 'black', 'white']
    }
};
const product3 = {
    name: 'Sneakers',
    price: 6000,
    inventory: {
        stock: 75,
        colorOptions: ['white', 'black', 'red']
    }

};
const products = [product1, product2, product3];
let colorChange = (products, newColor) => {
    products['inventory'].colorOptions === newColor;
    if (newColor == 'red') {
        products.price = products.price + (products.price / 100) * 10;
    }
    else if (newColor == 'black') {
        products.price = products.price + (products.price / 100) * 15;
    }
    else if (newColor == 'white') {
        products.price = products.price + (products.price / 100) * 5;
    }
    else if (newColor == 'blue') {
        products.price = products.price + (products.price / 100) * 10;
    }
    return products;
};
console.log(colorChange(product1, 'black'));
console.log(colorChange(product2, 'white'));
console.log(colorChange(product3, 'red'));
}

