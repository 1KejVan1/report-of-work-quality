import styles from "./text-input-cell.module.scss";

function TextInput({
  onChangeValueFunction = Function.prototype,
  value = "",
  employeeName = "",
  valueIndex = 0,
  isDayCell = false,
  isHourCell = false,
  propertyName = "",
}) {
  function handleInput(e = InputEvent.prototype) {
    if (isDayCell) {
      onChangeValueFunction(employeeName, propertyName, e.target.value);
    } else if (isHourCell) {
      onChangeValueFunction(
        employeeName,
        "hours",
        propertyName,
        e.target.value,
      );
    } else {
      onChangeValueFunction(employeeName, e.target.value, valueIndex);
    }
  }

  return (
    <input
      className={styles.input}
      type="text"
      onChange={handleInput}
      value={value}
    />
  );
}

export { TextInput as TextInputForCell };
