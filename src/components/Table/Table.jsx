import { useDispatch, useSelector } from "react-redux";

import { setEmployeeValue } from "../../store/employeeSlice";
import { TextInputForCell } from "../Inputs/TextInputForCell/TextInput";
import TableCell from "./Cell/TableCell";
import TableRow from "./Row/TableRow";
import styles from "./table.module.scss";

function Table() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  function setValue(value, valueIndex, employeeName) {
    dispatch(
      setEmployeeValue({
        name: employeeName,
        valueIndex: valueIndex,
        value: value,
      }),
    );
  }

  return (
    <table>
      <tbody className={styles.table}>
        {employees.map((employee) => {
          return (
            <TableRow key={employee.name}>
              {employee.values.map((item, index) => {
                if (index == 0) {
                  return (
                    <>
                      <TableCell className="cell_for_name" key={index}>
                        {employee.name}
                      </TableCell>
                      <TableCell key={index}>
                        <TextInputForCell
                          value={item}
                          onChangeValueFunction={setValue}
                          employeeName={employee.name}
                          valueIndex={index}
                        />
                      </TableCell>
                    </>
                  );
                } else {
                  return (
                    <TableCell key={index}>
                      <TextInputForCell
                        value={item}
                        onChangeValueFunction={setValue}
                        employeeName={employee.name}
                        valueIndex={index}
                      />
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
