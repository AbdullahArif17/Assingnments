"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product = {
    name: 'ABC',
    price: 2000,
    inventory: {
        stock: 100,
        colorOptions: ['White', 'Black', 'Red', 'Blue']
    },
};
function changeColor(product, newColor) {
    product.inventory.colorOptions.push(newColor);
    if (newColor === "Red") {
        product.price *= 1.10;
    }
    else if (newColor === "Blue") {
        product.price *= 0.95;
    }
}
