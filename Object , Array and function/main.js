//Assingnment 1 FRIND LIST
var people = {
    friend: []
};
var friend1 = {
    firstName: 'Zaid',
    lastName: 'Ashraf',
    id: 1
};
var friend2 = {
    firstName: 'Saad',
    lastName: 'Khan',
    id: 22
};
var friend3 = {
    firstName: 'Hassan',
    lastName: 'Ali',
};
people.friend.push(friend1, friend2, friend3);
console.log(people);
//Assignment 2: Manipulating an Array: Rearranging Words
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift('I');
scrambledArray.splice(1, 3);
scrambledArray.splice(2, 3, ' a student', 'of');
scrambledArray.splice(4, 1, 'GIAIC');
console.log(scrambledArray.join(' '));
// Assignment 3: Company Product Catalog
var inventory = [];
var product1 = {
    name: 'Audi',
    model: 2024,
    cost: 5000000,
    quantity: 3
};
var product2 = {
    name: 'Alto',
    model: 2024,
    cost: 800000,
    quantity: 5
};
var product3 = {
    name: 'Civic',
    model: 2020,
    cost: 2000000,
    quantity: 2
};
inventory.push(product1, product2, product3);
console.log(inventory[2].quantity);
var product4 = {
    name: 'Mehran',
    model: 2005,
    cost: 200000,
    quantity: 1
};
inventory.push(product4);
console.log(inventory[3].quantity);
console.log(inventory);
