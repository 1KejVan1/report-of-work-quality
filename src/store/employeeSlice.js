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
  },
});

export default employeesSlice.reducer;
export const { addEmployee, removeEmployee } = employeesSlice.actions;
