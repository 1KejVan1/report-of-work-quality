import { useEffect, useLayoutEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

import { Employee } from "../../models/Employee";
import { addEmployee } from "../../store/employeeSlice";
import styles from "./layout.module.scss";

function Layout() {
  const dispatch = useDispatch();
  const [emp, setEmp] = useState([]);
  const [names] = useState([
    "Духовский Д. Н.",
    "Духовский Е. Н.",
    "Самков Ю. В.",
    "Разумов А. И.",
    "Лапицкий Л. М.",
    "Прохоренко В. И.",
    "Прокопнёв А. В.",
    "Колосков Р. М.",
    "Межевич С. В.",
  ]);
  useEffect(() => {
    const arr = [];
    Array.from({ length: 9 }).map((item, index) => {
      if (emp.length < 9) {
        arr.push(Employee(names[index]));
      }
    });
    setEmp(arr);
  }, []);

  useEffect(() => {
    if (emp.length == 9) {
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
