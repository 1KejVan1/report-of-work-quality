import { Days } from "./Days";
import { Hours } from "./Hours";

// class Employee {
//   constructor(name = "") {
//     this.name = name;
//     this.days = new Days();
//     this.hours = new Hours();
//   }
// }

function Employee(name = "") {
  const obj = {};

  obj.day_values = new Array(30).fill("");
  obj.night_values = new Array(30).fill("");
  obj.name = name;
  obj.days = Days();
  obj.hours = Hours();

  return obj;
}

export { Employee };
