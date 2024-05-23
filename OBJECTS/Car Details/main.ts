
type Car = {
    name: string,
    color: 'Black' | 'White',
    model: number,
    engine : {
        horsepower: boolean,
    },
    getHorsepower: Function
}

let car: Car ={
    name: 'Audi',
    color: 'Black',
    model: 2022,
    engine: {
        horsepower: true,
    },
    getHorsepower: function(){
        console.log('The horsepower is 200')
    }
}

console.log(car.getHorsepower());
