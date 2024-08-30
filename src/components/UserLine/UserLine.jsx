import { TextInputForCell } from "../Inputs/TextInputForCell/TextInput";
import TableCell from "../Table/Cell/TableCell";
import styles from "./userline.module.scss";

function UserLine({ userName = "" }) {
  return (
    <div className={styles.container}>
      <div className={styles.names_col}>
        <div className={styles.name}>{userName}</div>
        <div className={styles.night_name}>Ночные</div>
      </div>
      <div className={styles.cells_col}>
        <div className={styles.days}>
          {Array.from({ length: 30 }).map((item) => {
            return (
              <TableCell>
                <TextInputForCell value="2" />
              </TableCell>
            );
          })}
        </div>
        <div className={styles.night}>
          {Array.from({ length: 30 }).map((item) => {
            return (
              <TableCell>
                <TextInputForCell value="2" />
              </TableCell>
            );
          })}
        </div>
      </div>
      <div className={styles.total_col}>
        <div className={styles.total_days}>
          {Array.from({ length: 6 }).map((item) => {
            return (
              <TableCell>
                <TextInputForCell value="1" />
              </TableCell>
            );
          })}
        </div>
        <div className={styles.total_hours}>
          {Array.from({ length: 6 }).map((item) => {
            return (
              <TableCell>
                <TextInputForCell value="3" />
              </TableCell>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserLine;
