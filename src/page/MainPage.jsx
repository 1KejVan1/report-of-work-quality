import { useRef } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";

import { TextInputForCell } from "../components/Inputs/TextInputForCell/TextInput";
import Menu from "../components/Menu/Menu";
import TableCell from "../components/Table/Cell/TableCell";
import { daysNames, hoursNames } from "../constants/constants";
import { CellType } from "../enums/CellType";
import styles from "./page.module.scss";

function MainPage() {
  const employees = useSelector((state) => state.employees);
  const info_container_col2 = useRef(null);
  const info_container_col3 = useRef(null);
  const info_container_col4 = useRef(null);

  function scrollCol2(e) {
    info_container_col2.current.scrollLeft = e.target.scrollLeft;
  }

  function scrollCol3(e) {
    info_container_col3.current.scrollLeft = e.target.scrollLeft;
  }

  function scrollCol4(e) {
    info_container_col4.current.scrollLeft = e.target.scrollLeft;
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.work_area}>
        <div className={classNames(styles.row_1, styles.info_container)}>
          <div className={styles.col_1}>
            <div>Сотрудники</div>
          </div>
          <div
            ref={info_container_col2}
            className={classNames(styles.over_hidden, styles.col_2)}
          >
            <div className={styles.grid}>
              <div className={styles.row_cells}>
                {Array.from({ length: 30 }).map((item, index) => {
                  return (
                    <TableCell type={CellType.FOR_NUMBERS}>
                      <span>{index}</span>
                    </TableCell>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            ref={info_container_col3}
            style={{ overflow: "hidden" }}
            className={styles.col_3}
          >
            <div className={styles.grid}>
              <div className={styles.row_cells}>
                {daysNames.map((dayName) => {
                  return (
                    <TableCell type={CellType.FOR_DAYS_AND_HOURS}>
                      {dayName}
                    </TableCell>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            ref={info_container_col4}
            style={{ overflow: "hidden" }}
            className={styles.col_4}
          >
            <div className={styles.grid}>
              <div className={styles.row_cells}>
                {hoursNames.map((hourName) => {
                  return (
                    <TableCell type={CellType.FOR_DAYS_AND_HOURS}>
                      {hourName}
                    </TableCell>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.row_2, styles.content)}>
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
          <div className={styles.col_2} onScroll={scrollCol2}>
            {employees.map((emp) => {
              return (
                <div className={styles.row}>
                  <div className={styles.row_cells}>
                    {emp.day_values.map((value) => {
                      return (
                        <TableCell>
                          <TextInputForCell value="Д" />
                        </TableCell>
                      );
                    })}
                  </div>
                  <div className={styles.row_cells}>
                    {emp.night_values.map((value) => {
                      return (
                        <TableCell>
                          <TextInputForCell value="Ч" />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.col_3} onScroll={scrollCol3}>
            {employees.map((emp) => {
              return (
                <div className={styles.row}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {daysNames.map((value) => {
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
          <div className={styles.col_4} onScroll={scrollCol4}>
            {employees.map((emp) => {
              return (
                <div className={styles.row}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {hoursNames.map((value) => {
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
    </div>
  );
}

export default MainPage;
