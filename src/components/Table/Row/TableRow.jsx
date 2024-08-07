import styles from "./row.module.scss";

function TableRow({ children = React.Component, ...args }) {
  return <tr className={styles.row}>{children}</tr>;
}

export default TableRow;
