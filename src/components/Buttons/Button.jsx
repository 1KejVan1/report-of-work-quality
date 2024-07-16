import styles from "./button.module.scss";

function Button({ text = "", onClickFunction = Function.prototype }) {
  return (
    <button className={styles.button} onClick={onClickFunction}>
      {text}
    </button>
  );
}

export default Button;
