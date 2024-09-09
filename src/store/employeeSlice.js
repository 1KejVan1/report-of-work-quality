import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee(state, action) {
      state.push(action.payload);
    },

    removeEmployee(state, action) {
      return state.filter((employee) => employee.name !== action.payload);
    },

    setEmployeeDayValue(state, action) {
      state.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.day_values[action.payload.valueIndex] = action.payload.value;
        }
      });
    },

    setEmployeeNightValue(state, action) {
      state.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.night_values[action.payload.valueIndex] =
            action.payload.value;
        }
      });
    },

    setTotalDaysValue(state, action) {
      state.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.days.map((day) => {
            if (day.eng_title === action.payload.propertyName) {
              day.value = action.payload.value;
            }
          });
        }
      });
    },

    setTotalHoursValue(state, action) {
      state.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.hours.map((day) => {
            if (day.eng_title === action.payload.propertyName) {
              day.value = action.payload.value;
            }
          });
        }
      });
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
} = employeesSlice.actions;
