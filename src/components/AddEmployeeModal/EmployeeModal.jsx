import { useState } from "react";
import { useContext } from "react";

import { useDispatch } from "react-redux";

import { DateContext } from "../../Context/DateContext";
import { Employee } from "../../models/Employee";
import { addEmployee } from "../../store/employeeSlice";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInputForModal/TextInput";
import styles from "./modal.module.scss";

function EmployeeModal({ hideModalFunction = Function.prototype }) {
  const [employeeName, setEmployeeName] = useState("");
  const dispatch = useDispatch();
  const { date } = useContext(DateContext);

  function hideModal() {
    hideModalFunction();
  }

  function onModalClick(e = MouseEvent.prototype) {
    e.preventDefault();
    e.stopPropagation();
  }

  function inputName(value) {
    setEmployeeName(value);
  }

  function submit() {
    if (employeeName) {
      dispatch(
        addEmployee(
          Employee(employeeName, date.selectedMonth, date.selectedYear),
        ),
      );
      hideModal();
    }
  }

  return (
    <div className={styles.back} onClick={hideModal}>
      <div className={styles.modal} onClick={onModalClick}>
        <div className={styles.title}>ЗАПОЛНИТЕ ПОЛЯ</div>
        <TextInput
          value={employeeName}
          onChangeValueFunction={inputName}
          placeholder="Иванов И. И."
          labelText="Фамилия и инициалы"
        />
        <Button text="Добавить" onClickFunction={submit} />
      </div>
    </div>
  );
}

export default EmployeeModal;
