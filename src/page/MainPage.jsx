import classNames from "classnames";
import { useSelector } from "react-redux";

import { TextInputForCell } from "../components/Inputs/TextInputForCell/TextInput";
import Menu from "../components/Menu/Menu";
import TableCell from "../components/Table/Cell/TableCell";
import styles from "./page.module.scss";

function MainPage() {
  const employees = useSelector((state) => state.employees);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.work_area}>
        <div className={styles.col_1}>
          {employees.map((emp) => {
            return (
              <div className={styles.row}>
                <div>{emp.name}</div>
                <div>Ночные</div>
              </div>
            );
          })}
        </div>
        <div className={styles.col_2}>
          <div className={styles.inner}>
            {employees.map((emp) => {
              return (
                <div className={styles.row}>
                  <div className={styles.row_cells}>
                    {emp.day_values.map((value) => {
                      return (
                        <TableCell>
                          <TextInputForCell value="1" />
                        </TableCell>
                      );
                    })}
                  </div>
                  <div className={styles.row_cells}>
                    {emp.night_values.map((value) => {
                      return (
                        <TableCell>
                          <TextInputForCell value="2" />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.col_3}>
          {employees.map((emp) => {
            return (
              <div className={styles.row}>
                <div className={classNames(styles.row_cells, styles.row_1)}>
                  {Array.from({ length: 6 }).map((value) => {
                    return (
                      <TableCell>
                        <TextInputForCell value="3" />
                      </TableCell>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.col_4}>
          {employees.map((emp) => {
            return (
              <div className={styles.row}>
                <div className={classNames(styles.row_cells, styles.row_1)}>
                  {Array.from({ length: 6 }).map((value) => {
                    return (
                      <TableCell>
                        <TextInputForCell value="4" />
                      </TableCell>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
