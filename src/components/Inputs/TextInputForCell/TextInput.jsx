import styles from "./text-input-cell.module.scss";

function TextInput({
  onChangeValueFunction = Function.prototype,
  value = "",
  employeeName = "",
  valueIndex = 0,
}) {
  function handleInput(e = InputEvent.prototype) {
    onChangeValueFunction(e.target.value, valueIndex, employeeName);
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
