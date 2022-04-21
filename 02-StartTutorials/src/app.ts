// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevelatedEmployee extends Employee, Admin {}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevelatedEmployee = Admin & Employee;

const el: ElevelatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

// ex2
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('startDate: ' + emp.startDate);
  }
}

printEmployeeInformation(el);

printEmployeeInformation({ name: 'Ajay', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
}

useVehicle(v1);
useVehicle(v2);

// 1>)
// const userInputElement = <HTMLInputElement>document.getElementById('message')!;
// 2
const userInputElement = document.getElementById(
  'message'
)! as HTMLInputElement;

userInputElement.value = 'Hi there';

// 3>)
const userInputElement2 = document.getElementById('message');

if (userInputElement2) {
  (userInputElement as HTMLInputElement).value = 'Hi there';
}

// INDEX PROPERTIES
interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character',
};

// FN OVERLOADING

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
