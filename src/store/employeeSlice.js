import { act } from "react";

import { createSlice } from "@reduxjs/toolkit";

import { AbbreviatureOfDays } from "../enums/AbbreviatureOfDays";
import { Days } from "../models/Days";
import { Employee } from "../models/Employee";
import { Hours } from "../models/Hours";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    totalDays: Days(),
    totalHours: Hours(),
  },
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },

    setEmployeeDayValue(state, action) {
      state.employees.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.day_values[action.payload.valueIndex] = action.payload.value;
        }
      });
    },

    setEmployeeNightValue(state, action) {
      state.employees.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.night_values[action.payload.valueIndex] =
            action.payload.value;
        }
      });
    },

    setTotalDaysValue(state, action) {
      state.employees.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.days[action.payload.propertyName] = action.payload.value;
        }
      });
    },

    setTotalHoursValue(state, action) {
      state.employees.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.hours[action.payload.propertyName] = action.payload.value;
        }
      });
    },

    calculateActualDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.actual = emp.day_values.reduce((acc, value) => {
          if (isFinite(value) && value !== "") {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateWeekendsDays(state) {
      state.employees.map((emp) => {
        emp.days.weekends = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.WEEKENDS) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateAtYourExpenceDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.at_your_expence = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.AT_YOUR_EXPENCE) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateAbsenceDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.absence = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.ABSENCE) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateVacationsDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.vacation = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.VACATIONS) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateSickDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.sick = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.SICK) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateBisTripDays(state) {
      state.employees.map((emp = Employee()) => {
        emp.days.bis_trip = emp.day_values.reduce((acc, value) => {
          if (value.toUpperCase() === AbbreviatureOfDays.BIS_TRIP) {
            return ++acc;
          } else return acc;
        }, 0);
      });
    },

    calculateNightHours(state) {
      state.employees.map((emp = Employee()) => {
        emp.hours.night_hours = emp.night_values.reduce((acc, value) => {
          if (isFinite(value) && value !== "") {
            acc += Number(value);
            return acc;
          } else return acc;
        }, 0);
      });
    },

    resizeArrays(state, action) {
      state.employees.map((emp = Employee()) => {
        const diff = action.payload.daysPerMonth - emp.day_values.length;

        if (diff < 0) {
          emp.day_values = emp.day_values.slice(0, diff);
          emp.night_values = emp.night_values.slice(0, diff);
        } else if (diff > 0) {
          for (let i = 0; i < diff; i++) {
            emp.day_values.push("");
            emp.night_values.push("");
          }
        }
      });
    },

    deleteEmployee(state, action) {
      state.employees = state.employees.filter(
        (emp) => emp.name !== action.payload.employeeName,
      );
    },

    renameEmployee(state, action) {
      state.employees.map((emp) => {
        if (emp.name === action.payload.prevName) {
          emp.name = action.payload.newName;
        }
      });
    },

    hideEmployee(state, action) {
      state.employees.map((emp) => {
        if (emp.name === action.payload.employeeName) {
          emp.isDeleted = true;
        }
      });
    },

    showEmployee(state, action) {
      state.employees.map((emp) => {
        if (emp.name === action.payload.employeeName) {
          emp.isDeleted = false;
        }
      });
    },

    calculateTotalDays(state) {
      const daysNames = Object.keys(state.totalDays);

      for (let i = 0; i < daysNames.length; i++) {
        const dayName = daysNames[i];
        let count = 0;

        for (let k = 0; k < state.employees.length; k++) {
          count += state.employees[k].days[dayName];
        }
        state.totalDays[dayName] = count;
      }
    },

    calculateTotalHours(state) {
      const hoursNames = Object.keys(state.totalHours);

      for (let i = 0; i < hoursNames.length; i++) {
        const hourName = hoursNames[i];
        let count = 0;

        for (let k = 0; k < state.employees.length; k++) {
          count += state.employees[k].hours[hourName];
        }
        state.totalHours[hourName] = count;
      }
    },
  },
});

export default employeesSlice.reducer;
export const {
  addEmployee,
  removeEmployee,
  setEmployeeDayValue,
  setEmployeeNightValue,
  setTotalDaysValue,
  setTotalHoursValue,
  calculateActualDays,
  calculateWeekendsDays,
  calculateAbsenceDays,
  calculateAtYourExpenceDays,
  calculateSickDays,
  calculateVacationsDays,
  calculateBisTripDays,
  calculateNightHours,
  resizeArrays,
  deleteEmployee,
  renameEmployee,
  hideEmployee,
  showEmployee,
  calculateTotalDays,
  calculateTotalHours,
} = employeesSlice.actions;
