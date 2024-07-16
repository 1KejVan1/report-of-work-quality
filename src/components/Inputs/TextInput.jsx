import styles from "./text-input.module.scss";

function TextInput({
  placeholder = "",
  onChangeValueFunction = Function.prototype,
  value = "",
  labelText = "",
}) {
  function handleInput(e = InputEvent.prototype) {
    onChangeValueFunction(e.target.value);
  }

  return (
    <div className={styles.container}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
}

export default TextInput;
