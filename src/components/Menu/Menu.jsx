import { useState } from "react";
import { useContext } from "react";

import { useDispatch } from "react-redux";

import { DateContext } from "../../Context/DateContext";
import { Employee } from "../../models/Employee";
import {
  addEmployee as addEmployeeAction,
  calculateAbsenceDays,
  calculateActualDays,
  calculateAtYourExpenceDays,
  calculateBisTripDays,
  calculateNightHours,
  calculateSickDays,
  calculateTotalDays,
  calculateTotalHours,
  calculateVacationsDays,
  calculateWeekendsDays,
} from "../../store/employeeSlice";
import EmployeeModal from "../AddEmployeeModal/EmployeeModal";
import Button from "../Buttons/Button";
import DatePicker from "../DatePicker/DatePicker";
import styles from "./menu.module.scss";

function Menu() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { date } = useContext(DateContext);

  function showModal() {
    setShow((prev) => !prev);
  }

  function calcAllDays() {
    dispatch(calculateAbsenceDays());
    dispatch(calculateActualDays());
    dispatch(calculateAtYourExpenceDays());
    dispatch(calculateVacationsDays());
    dispatch(calculateWeekendsDays());
    dispatch(calculateSickDays());
    dispatch(calculateBisTripDays());
    dispatch(calculateNightHours());
    dispatch(calculateTotalDays());
    dispatch(calculateTotalHours());
  }

  function addEmployee(employeeName) {
    dispatch(
      addEmployeeAction(
        Employee(employeeName, date.selectedMonth, date.selectedYear),
      ),
    );
  }

  return (
    <div className={styles.container}>
      {show && (
        <EmployeeModal
          hideModalFunction={showModal}
          onSubmitFunction={addEmployee}
        />
      )}
      <Button text="" onClickFunction={showModal}>
        Добавить сотрудника
      </Button>
      <Button text="Посчитать" onClickFunction={calcAllDays}>
        Посчитать
      </Button>
      <DatePicker />
    </div>
  );
}

export default Menu;
