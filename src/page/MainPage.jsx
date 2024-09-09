import { useEffect, useRef, useState } from "react";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { TextInputForCell } from "../components/Inputs/TextInputForCell/TextInput";
import Menu from "../components/Menu/Menu";
import TableCell from "../components/Table/Cell/TableCell";
import { daysNames, hoursNames } from "../constants/constants";
import { CellType } from "../enums/CellType";
import { Employee } from "../models/Employee";
import {
  setEmployeeDayValue,
  setEmployeeNightValue,
  setTotalDaysValue,
  setTotalHoursValue,
} from "../store/employeeSlice";
import styles from "./page.module.scss";

function MainPage() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [daysAndHoursNames] = useState(Employee());
  const info_container_col2 = useRef(null);
  const info_container_col3 = useRef(null);
  const info_container_col4 = useRef(null);

  function scrollCol2(e = HTMLDivElement.prototype) {
    info_container_col2.current.scrollLeft = e.target.scrollLeft;
  }

  function scrollCol3(e) {
    info_container_col3.current.scrollLeft = e.target.scrollLeft;
  }

  function scrollCol4(e) {
    info_container_col4.current.scrollLeft = e.target.scrollLeft;
  }

  function changeDayValue(employeeName, value, index) {
    dispatch(
      setEmployeeDayValue({
        name: employeeName,
        valueIndex: index,
        value: value,
      }),
    );
  }
  function changeNightValue(employeeName, value, index) {
    dispatch(
      setEmployeeNightValue({
        name: employeeName,
        valueIndex: index,
        value: value,
      }),
    );
  }

  function changeTotalDaysValue(employeeName, propertyName, value) {
    dispatch(
      setTotalDaysValue({
        name: employeeName,
        propertyName: propertyName,
        value: value,
      }),
    );
  }

  function changeTotalHoursValue(employeeName, propertyName, value) {
    dispatch(
      setTotalHoursValue({
        name: employeeName,
        propertyName: propertyName,
        value: value,
      }),
    );
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
                {daysAndHoursNames.days.map((day) => {
                  return (
                    <TableCell type={CellType.FOR_DAYS_AND_HOURS}>
                      {day.rus_title}
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
                {daysAndHoursNames.hours.map((hour) => {
                  return (
                    <TableCell type={CellType.FOR_DAYS_AND_HOURS}>
                      {hour.rus_title}
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
                <div className={styles.two_rows}>
                  <div>{emp.name}</div>
                  <div>Ночные</div>
                </div>
              );
            })}
            <div className={classNames(styles.two_rows, styles.total_row)}>
              <div>Итого</div>
            </div>
          </div>
          <div className={styles.col_2} onScroll={scrollCol2}>
            {employees.map((emp) => {
              return (
                <div className={styles.two_rows}>
                  <div className={styles.row_cells}>
                    {emp.day_values.map((value, index) => {
                      return (
                        <TableCell>
                          <TextInputForCell
                            value={value}
                            employeeName={emp.name}
                            valueIndex={index}
                            onChangeValueFunction={changeDayValue}
                          />
                        </TableCell>
                      );
                    })}
                  </div>
                  <div className={styles.row_cells}>
                    {emp.night_values.map((value, index) => {
                      return (
                        <TableCell>
                          <TextInputForCell
                            value={value}
                            employeeName={emp.name}
                            valueIndex={index}
                            onChangeValueFunction={changeNightValue}
                          />
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
                <div className={styles.two_rows}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {emp.days.map((day) => {
                      return (
                        <TableCell>
                          <TextInputForCell
                            propertyName={day.eng_title}
                            isDayCell
                            value={day.value}
                            employeeName={emp.name}
                            onChangeValueFunction={changeTotalDaysValue}
                          />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className={classNames(styles.two_rows, styles.total_row)}>
              <div className={classNames(styles.row_cells, styles.row_1)}>
                {daysNames.map((value) => {
                  return (
                    <TableCell>
                      <TextInputForCell value={""} />
                    </TableCell>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.col_4} onScroll={scrollCol4}>
            {employees.map((emp) => {
              return (
                <div className={styles.two_rows}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {emp.hours.map((hour) => {
                      return (
                        <TableCell>
                          <TextInputForCell
                            propertyName={hour.eng_title}
                            isDayCell
                            value={hour.value}
                            employeeName={emp.name}
                            onChangeValueFunction={changeTotalHoursValue}
                          />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className={classNames(styles.two_rows, styles.total_row)}>
              <div className={classNames(styles.row_cells, styles.row_1)}>
                {hoursNames.map((value) => {
                  return (
                    <TableCell>
                      <TextInputForCell value="" />
                    </TableCell>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
