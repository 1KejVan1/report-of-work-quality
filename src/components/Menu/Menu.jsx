import { useState } from "react";

import EmployeeModal from "../AddEmployeeModal/EmployeeModal";
import Button from "../Buttons/Button";
import styles from "./menu.module.scss";

function Menu() {
  const [show, setShow] = useState(false);

  function showModal() {
    setShow((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      {show && <EmployeeModal hideModalFunction={showModal} />}
      <Button text="Добавить сотрудника" onClickFunction={showModal} />
    </div>
  );
}

export default Menu;
