// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Ajay',
//   age: 22,
// };

//default enumerated with 0
enum Role {
  ADMIN = 5, //starting value
  READ_ONLY,
  AUTHOR = 'Author', //cam hv strings too
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  roleEnum: any;
} = {
  name: 'Ajay',
  age: 22,
  role: [1, 'Student'],
  hobbies: ['Sports', 'Cooking'],
  roleEnum: Role.ADMIN,
};
// ==============================
//allowed
person.role.push('admin');
// ==============================
if (person.roleEnum === Role.AUTHOR) {
  console.log('is admin');
}
let favoriteActivities: string[];
let favoriteActivities2: any[];
// favoriteActivities=['Sports',9]
favoriteActivities2 = ['Sports', 9];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map()//ERROR!!!
}
