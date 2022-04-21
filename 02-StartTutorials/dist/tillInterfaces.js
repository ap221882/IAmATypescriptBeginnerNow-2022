"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        // private employees: string[] = [];
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log('Department is: ' + this.name + '  ' + this.id);
    }
    addEmployee(employee) {
        // this.id=0;---readOnly
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('1', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Minny');
accounting.printEmployeeInfo();
// accounting.employees--isprivate
const accountingCopy = { name: 'Ajay', describe: accounting.describe };
// accountingCopy.describe();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addEmployee(employee) {
        if (employee === 'Ajay') {
            return;
        }
        this.employees.push(employee);
    }
}
// Protected can be accessed by their inheriting classes
const accountingIT = new ITDepartment('1', ['Accounting']);
console.log(accountingIT);
class Aadmi {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    greet(message) {
        console.log(this.name);
    }
}
let person1;
person1 = {
    name: 'Ajay',
    age: 18,
    greet(message) {
        console.log('How you doing? ' + person1.name + ' ' + message);
    },
};
person1.greet('hello');
//# sourceMappingURL=tillInterfaces.js.map