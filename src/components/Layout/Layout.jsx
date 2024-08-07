import { useEffect, useLayoutEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

import { Employee } from "../../models/Employee";
import { addEmployee } from "../../store/employeeSlice";
import styles from "./layout.module.scss";

function Layout() {
  const dispatch = useDispatch();
  const [emp, setEmp] = useState([]);
  console.log(emp.length);

  useEffect(() => {
    const arr = [];
    Array.from({ length: 15 }).map((item, index) => {
      if (emp.length < 15) {
        arr.push(Employee(index));
      }
    });
    setEmp(arr);
  }, []);

  useEffect(() => {
    if (emp.length == 15) {
      emp.map((item) => dispatch(addEmployee(item)));
    }
  }, [emp]);

  return (
    <>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
