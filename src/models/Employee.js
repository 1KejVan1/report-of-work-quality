import { Days } from "./Days";
import { Hours } from "./Hours";

// export function Employee(name = "") {
//   this.name = name;
//   this.days = new Days();
//   this.hours = new Hours();
// }

export function Employee(name = "") {
  let obj = {};

  obj.name = name;
  obj.days = Days();
  obj.hours = Hours();

  return obj;
}
