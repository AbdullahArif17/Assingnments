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
    lastName: 'Kan',
    id: 22
}
const friend3:Friend ={
    firstName: 'Hassan',
    lastName: 'Ali',
}


people.friend.push(friend1,friend2,friend3)

console.log(people)