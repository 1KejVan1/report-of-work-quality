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
    setEmployeeValue(state, action) {
      state.map((employee) => {
        if (employee.name == action.payload.name) {
          employee.values[action.payload.valueIndex] = action.payload.value;
        }
      });
    },
  },
});

export default employeesSlice.reducer;
export const { addEmployee, removeEmployee, setEmployeeValue } =
  employeesSlice.actions;
