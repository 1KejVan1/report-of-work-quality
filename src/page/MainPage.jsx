import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { DateContext } from "../Context/DateContext";
import { DeletedEmployeesContext } from "../Context/DeletedEmployees";
import { TextInputForCell } from "../components/Inputs/TextInputForCell/TextInput";
import Menu from "../components/Menu/Menu";
import TableCell from "../components/Table/Cell/TableCell";
import UserLine from "../components/UserLine/UserLine";
import { daysNames, hoursNames } from "../constants/constants";
import { CellType } from "../enums/CellType";
import { DateModel } from "../models/Date";
import { Employee, defineDaysPerMonth } from "../models/Employee";
import { resizeArrays } from "../store/employeeSlice";
import styles from "./page.module.scss";

function MainPage() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [graficDate, setGraficDate] = useState(new DateModel());
  const [deletedEmployees, setDeletedEmployees] = useState([]);
  const info_container_col2 = useRef(null);
  const info_container_col3 = useRef(null);
  const info_container_col4 = useRef(null);
  const [refCol2Array, setRefCol2Array] = useState([]);
  const [refCol3Array, setRefCol3Array] = useState([]);
  const [refCol4Array, setRefCol4Array] = useState([]);

  useEffect(() => {
    resizeEmpArrays();
  }, [graficDate]);

  useLayoutEffect(() => {
    window.addEventListener("resize", fixMargin);

    return () => {
      window.removeEventListener("resize", fixMargin);
    };
  });

  useEffect(() => {
    fixMargin();
  }, []);

  useEffect(() => {
    setRefCol2Array(fillRefArray());
    setRefCol3Array(fillRefArray());
    setRefCol4Array(fillRefArray());
  }, [employees.employees]);

  function fillRefArray() {
    const arr = [];

    for (let i = 0; i < employees.employees.length; i++) {
      arr.push(React.createRef(null));
    }

    return arr;
  }

  function scrollCol2(e) {
    info_container_col2.current.scrollLeft = e.target.scrollLeft;

    refCol2Array.map((item = React.createRef(null)) => {
      item.current.scrollLeft = e.target.scrollLeft;
    });
  }

  function scrollCol3(e) {
    info_container_col3.current.scrollLeft = e.target.scrollLeft;

    refCol3Array.map((item = React.createRef(null)) => {
      item.current.scrollLeft = e.target.scrollLeft;
    });
  }

  function scrollCol4(e) {
    info_container_col4.current.scrollLeft = e.target.scrollLeft;

    refCol4Array.map((item = React.createRef(null)) => {
      item.current.scrollLeft = e.target.scrollLeft;
    });
  }

  function fixMargin() {
    console.log(1);

    if (
      info_container_col2.current.clientWidth -
        info_container_col2.current.scrollWidth ===
      0
    ) {
      info_container_col3.current.style.marginLeft = "32px";
    } else {
      info_container_col3.current.style.marginLeft = "";
    }
  }

  function getMonthName(month = 2, year = 2000) {
    if (month == 12) {
      month = 0;
    } else {
      month--;
    }

    return new Intl.DateTimeFormat("ru", {
      month: "long",
      year: "numeric",
    }).format(new Date(year, month));
  }

  function resizeEmpArrays() {
    dispatch(
      resizeArrays({
        daysPerMonth: defineDaysPerMonth(
          graficDate.selectedMonth,
          graficDate.selectedYear,
        ),
      }),
    );
  }

  return (
    <DateContext.Provider value={{ date: graficDate, setDate: setGraficDate }}>
      <DeletedEmployeesContext.Provider
        value={{
          employees: deletedEmployees,
          addDeletedEmployees: setDeletedEmployees,
        }}
      >
        <div className={styles.container}>
          <div className={styles.menu}>
            <Menu />
          </div>
          <div className={styles.work_area}>
            <div className={classNames(styles.row_1, styles.date_info)}>
              График за{" "}
              {getMonthName(graficDate.selectedMonth, graficDate.selectedYear)}
            </div>
            <div className={classNames(styles.row_2, styles.info_container)}>
              <div className={styles.col_1}>
                <div>Сотрудники</div>
              </div>
              <div
                ref={info_container_col2}
                className={classNames(styles.over_hidden, styles.col_2)}
              >
                <div className={styles.grid}>
                  <div className={styles.row_cells}>
                    {Array.from({
                      length:
                        defineDaysPerMonth(
                          graficDate.selectedMonth,
                          graficDate.selectedYear,
                        ) + 1,
                    }).map((_, index) => {
                      if (index > 0) {
                        return (
                          <TableCell
                            key={`${index} day`}
                            type={CellType.FOR_NUMBERS}
                          >
                            <span>{index}</span>
                          </TableCell>
                        );
                      }
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
                    {daysNames.map((day) => {
                      return (
                        <TableCell
                          key={day.rus_title}
                          type={CellType.FOR_DAYS_AND_HOURS}
                        >
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
                    {hoursNames.map((hour) => {
                      return (
                        <TableCell
                          key={hour.rus_title}
                          type={CellType.FOR_DAYS_AND_HOURS}
                        >
                          {hour.rus_title}
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(styles.row_3, styles.content)}>
              {employees.employees.map((emp = Employee(), index) => {
                return (
                  <UserLine
                    key={emp.name}
                    employee={emp}
                    employeeNumber={index + 1}
                    refCol2={refCol2Array[index]}
                    refCol3={refCol3Array[index]}
                    refCol4={refCol4Array[index]}
                  />
                );
              })}
              <div className={classNames(styles.total_row, styles.col_1)}>
                <div className={classNames(styles.two_rows)}>Итого</div>
              </div>
              <div
                className={classNames(styles.total_row, styles.col_2)}
                onScroll={scrollCol2}
              >
                <div className={styles.two_rows}>
                  <div className={styles.row_cells}>
                    {Array.from({
                      length:
                        defineDaysPerMonth(
                          graficDate.selectedMonth,
                          graficDate.selectedYear,
                        ) + 1,
                    }).map((_, index) => {
                      return <TableCell key={index} />;
                    })}
                  </div>
                </div>
              </div>
              <div
                className={classNames(styles.total_row, styles.col_3)}
                onScroll={scrollCol3}
              >
                <div className={styles.two_rows}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {daysNames.map((day) => {
                      return (
                        <TableCell key={day.eng_title}>
                          <TextInputForCell
                            value={employees.totalDays[day.eng_title]}
                          />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className={classNames(styles.total_row, styles.col_4)}
                onScroll={scrollCol4}
              >
                <div className={styles.two_rows}>
                  <div className={classNames(styles.row_cells, styles.row_1)}>
                    {hoursNames.map((hour) => {
                      return (
                        <TableCell key={hour.eng_title}>
                          <TextInputForCell
                            value={employees.totalHours[hour.eng_title]}
                          />
                        </TableCell>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DeletedEmployeesContext.Provider>
    </DateContext.Provider>
  );
}

export default MainPage;
