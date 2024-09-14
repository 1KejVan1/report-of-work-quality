import classNames from "classnames";
import { useDispatch } from "react-redux";

import { daysNames } from "../../constants/constants";
import { Employee } from "../../models/Employee";
import {
  setEmployeeDayValue,
  setEmployeeNightValue,
  setTotalDaysValue,
  setTotalHoursValue,
} from "../../store/employeeSlice";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import { TextInputForCell } from "../Inputs/TextInputForCell/TextInput";
import TableCell from "../Table/Cell/TableCell";
import styles from "./userline.module.scss";

function UserLine({
  employee = Employee(),
  employeeNumber = 0,
  refCol2 = null,
  refCol3 = null,
  refCol4 = null,
}) {
  const dispatch = useDispatch();

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
    <>
      <div className={styles.col_1}>
        <div className={styles.name_container}>
          <div className={styles.button_container}>
            <DeleteButton />
            <EditButton />
          </div>
          <div
            className={styles.name}
          >{`${employeeNumber} ${employee.name}`}</div>
          <div className={styles.night_title}>Ночные</div>
        </div>
      </div>
      <div ref={refCol2} className={styles.col_2}>
        <div className={styles.two_rows}>
          <div className={styles.row_cells}>
            {employee.day_values.map((value, index) => {
              return (
                <TableCell>
                  <TextInputForCell
                    value={value}
                    employeeName={employee.name}
                    valueIndex={index}
                    onChangeValueFunction={changeDayValue}
                  />
                </TableCell>
              );
            })}
          </div>
          <div className={styles.row_cells}>
            {employee.night_values.map((value, index) => {
              return (
                <TableCell>
                  <TextInputForCell
                    value={value}
                    employeeName={employee.name}
                    valueIndex={index}
                    onChangeValueFunction={changeNightValue}
                  />
                </TableCell>
              );
            })}
          </div>
        </div>
      </div>
      <div ref={refCol3} className={styles.col_3}>
        <div className={styles.two_rows}>
          <div className={classNames(styles.row_cells, styles.row_1)}>
            {Object.entries(employee.days).map(([key, value]) => {
              return (
                <TableCell>
                  <TextInputForCell
                    propertyName={key}
                    isDayCell
                    value={value}
                    employeeName={employee.name}
                    onChangeValueFunction={changeTotalDaysValue}
                  />
                </TableCell>
              );
            })}
          </div>
        </div>
      </div>
      <div ref={refCol4} className={styles.col_4}>
        <div className={styles.two_rows}>
          <div className={classNames(styles.row_cells, styles.row_1)}>
            {Object.entries(employee.hours).map(([key, value]) => {
              return (
                <TableCell>
                  <TextInputForCell
                    propertyName={key}
                    isDayCell
                    value={value}
                    employeeName={employee.name}
                    onChangeValueFunction={changeTotalHoursValue}
                  />
                </TableCell>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLine;
