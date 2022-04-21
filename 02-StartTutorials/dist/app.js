"use strict";
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
const el = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
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
//# sourceMappingURL=app.js.map