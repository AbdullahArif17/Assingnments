//Assingnment 1 FRIND LIST

const people = {
    friend: []
}

type Friend = {
    firstName: string,
    lastName: string,
    id?: number
}


const friend1:Friend ={
    firstName: 'Zaid',
    lastName: 'Ashraf',
    id: 1
}
const friend2:Friend ={
    firstName: 'Saad',
    lastName: 'Khan',
    id: 22
}
const friend3:Friend ={
    firstName: 'Hassan',
    lastName: 'Ali',
}


people.friend.push(friend1,friend2,friend3)

console.log(people)

//Assignment 2: Manipulating an Array: Rearranging Words

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

scrambledArray.shift();
scrambledArray.pop();
scrambledArray.unshift('I',);
scrambledArray.splice(1,3);
scrambledArray.splice(2,3,' a student', 'of');
scrambledArray.splice(4,1,'GIAIC');

console.log(scrambledArray.join(' '))

// Assignment 3: Company Product Catalog

let inventory = [];

let product1 = {
    name: 'Audi',
    model:2024,
    cost: 5000000,
    quantity: 3
}
let product2 = {
    name: 'Alto',
    model:2024,
    cost: 800000,
    quantity: 5
}
let product3 = {
    name: 'Civic',
    model:2020,
    cost: 2000000,
    quantity: 2
};


inventory.push(product1, product2, product3);

console.log(inventory[2].quantity)

let product4 = {
    name: 'Mehran',
    model:2005,
    cost: 200000,
    quantity: 1
}

inventory.push(product4);

console.log(inventory[3].quantity);

console.log(inventory)

// Assignment 4: Student List Organizer

type Student = {
    name: string,
    senior: boolean,
    completedAssignments:boolean
};

const students = []

let student1:Student = {
    name: 'Abdullah',
    senior: false,
    completedAssignments: true
}
let student2:Student = {
    name: 'Hamza',
    senior: true,
    completedAssignments: false
}
let student3:Student = {
    name: 'Saad',
    senior: true,
    completedAssignments: true
}
let student4:Student = {
    name: 'Zohaib',
    senior: false,
    completedAssignments: false
}

students.push(student1,student2,student3,student4)

function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.senior && student.completedAssignments);
}

function updateClassList(students: Student[]): Student[] {
    return students.filter(student => student.completedAssignments || !student.senior);
}

console.log(findSeniorStudentsWithAssignments(students));
console.log(updateClassList(students))