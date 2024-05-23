"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    name: 'Audi',
    color: 'Black',
    model: 2022,
    engine: {
        horsepower: true,
    },
    getHorsepower: function () {
        console.log('The horsepower is 200');
    }
};
console.log(car.getHorsepower());
