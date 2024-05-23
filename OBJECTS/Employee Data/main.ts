type Employee = {
    name: string,
    department: string,
    role: "Manager" | "Engineer" | "Intern",
    skills?: string[],
    contact?: {
        phone?: number,
        email?: string,
    }
};

let employee: Employee = {
    name: 'abdullah',
    department: 'Science',
    role: 'Manager',
    skills: ['typescript', 'javascript']
};

console.log(employee)
