import styles from "./tooltip.module.scss";

function ToolTip({ text = "", posX = 0, posY = 0 }) {
  return (
    <span style={{ top: posY, left: posX + 20 }} className={styles.container}>
      {text}
    </span>
  );
}

export default ToolTip;
