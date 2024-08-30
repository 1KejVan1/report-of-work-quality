import { useState } from "react";

import { TextInputForCell } from "../../Inputs/TextInputForCell/TextInput";
import TableCell from "../Cell/TableCell";
import TableRow from "../Row/TableRow";
import styles from "./total_table.module.scss";

function TotalTable() {
  const [arr] = useState(Array.from({ length: 9 }));

  return (
    <table>
      {/* <thead className={styles.caption}>
        <caption>ДНИ</caption>
      </thead> */}
      <tbody className={styles.table}>
        {arr.map((item, index) => {
          return (
            <TableRow key={index}>
              {Array.from({ length: 7 }).map((item) => {
                return (
                  <TableCell>
                    <TextInputForCell value="123" />
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
}

export default TotalTable;
