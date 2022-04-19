"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Ajay',
//   age: 22,
// };
//default enumerated with 0
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
const person = {
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
let favoriteActivities;
let favoriteActivities2;
// favoriteActivities=['Sports',9]
favoriteActivities2 = ['Sports', 9];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // hobby.map()//ERROR!!!
}
