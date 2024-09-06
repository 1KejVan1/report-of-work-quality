import { CellType } from "../../../enums/CellType";
import styles from "./cell.module.scss";

function TableCell({ children = React.Component, type = CellType.DEFAULT }) {
  return <td className={styles[type]}>{children}</td>;
}

export default TableCell;
