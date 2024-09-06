import { Days } from "./Days";
import { Hours } from "./Hours";

function Employee(name = "") {
  const obj = {};

  obj.day_values = new Array(30).fill("");
  obj.night_values = new Array(30).fill("");
  obj.name = name;
  obj.days = Days();
  obj.hours = Hours();
  obj.sumNightHours = function () {
    this.hours.night_hours = this.night_values.reduce((accum, curr) => {
      accum += curr;
    }, 0);
  };
  obj.sumTotalHours = function () {
    this.hours.total_hours =
      this.day_values.reduce((accum, curr) => {
        accum += curr;
      }, 0) +
      this.night_values.reduce((accum, curr) => {
        accum += curr;
      }, 0);
  };

  return obj;
}

export { Employee };
