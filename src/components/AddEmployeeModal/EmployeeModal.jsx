import { useState } from "react";

import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInputForModal/TextInput";
import styles from "./modal.module.scss";

function EmployeeModal({
  hideModalFunction = Function.prototype,
  onSubmitFunction = Function.prototype,
  currentName = "",
}) {
  const [employeeName, setEmployeeName] = useState(currentName);

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
      onSubmitFunction(employeeName);
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
        <Button onClickFunction={submit}>Добавить</Button>
      </div>
    </div>
  );
}

export default EmployeeModal;
