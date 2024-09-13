import { useState } from "react";

import { useDispatch } from "react-redux";

import {
  calculateAbsenceDays,
  calculateActualDays,
  calculateAtYourExpenceDays,
  calculateBisTripDays,
  calculateNightHours,
  calculateSickDays,
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
  }

  return (
    <div className={styles.container}>
      {show && <EmployeeModal hideModalFunction={showModal} />}
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
