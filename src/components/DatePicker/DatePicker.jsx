import { useContext } from "react";

import { DateContext } from "../../Context/DateContext";
import { DateModel } from "../../models/Date";
import styles from "./datepicker.module.scss";

function DatePicker() {
  const { setDate } = useContext(DateContext);

  function handleOnChange(e) {
    const [year, month] = e.target.value.split("-");

    setDate(new DateModel(month, year));
  }

  return (
    <label className={styles.container}>
      Дата графика
      <input
        defaultValue={"2024-01"}
        lang="ru"
        type="month"
        className={styles.picker}
        onChange={handleOnChange}
        min={"2022-01"}
      />
    </label>
  );
}

export default DatePicker;
