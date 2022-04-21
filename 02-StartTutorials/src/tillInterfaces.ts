class Department {
  // private id: string;
  // name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log('Department is: ' + this.name + '  ' + this.id);
  }

  addEmployee(employee: string) {
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
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  addEmployee(employee: string) {
    if (employee === 'Ajay') {
      return;
    }
    this.employees.push(employee);
  }
}
// Protected can be accessed by their inheriting classes
const accountingIT = new ITDepartment('1', ['Accounting']);
console.log(accountingIT);

interface Person {
  name: string;
  age: number;
  greet(message: string): void;
}

class Aadmi implements Person {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
  greet(message: string): void {
    console.log(this.name);
  }
}

let person1: Person;

person1 = {
  name: 'Ajay',
  age: 18,
  greet(message) {
    console.log('How you doing? ' + person1.name + ' ' + message);
  },
};

person1.greet('hello');
