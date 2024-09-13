import { Days } from "./Days";
import { Hours } from "./Hours";

function Employee(name = "", selectedMonth = 1, selectedYear = 2000) {
  const emp = {};
  const daysPerMonth = defineDaysPerMonth(selectedMonth, selectedYear);
  emp.day_values = new Array(defineDaysPerMonth()).fill("");
  emp.night_values = new Array(defineDaysPerMonth()).fill("");
  emp.name = name;
  emp.days = Days();
  emp.hours = Hours();

  return emp;
}

function defineDaysPerMonth(month = 1, year = 2000) {
  return new Date(year, month, 0).getDate();
}
export { Employee, defineDaysPerMonth };
