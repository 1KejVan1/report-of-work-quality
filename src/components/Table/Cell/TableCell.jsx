import styles from "./cell.module.scss";

function TableCell({ children = React.Component, className = "cell" }) {
  return <td className={styles[className]}>{children}</td>;
}

export default TableCell;
