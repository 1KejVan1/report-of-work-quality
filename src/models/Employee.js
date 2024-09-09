import { Days } from "./Days";
import { Hours } from "./Hours";

function Employee(name = "") {
  const emp = {};

  emp.day_values = new Array(30).fill("");
  emp.night_values = new Array(30).fill("");
  emp.name = name;
  emp.days = Days();
  emp.hours = Hours();

  return emp;
}

export { Employee };
