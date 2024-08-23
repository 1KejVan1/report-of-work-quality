import { useSelector } from "react-redux";

import Menu from "../components/Menu/Menu";
import EmployeeTable from "../components/Table/EmployeeTable/EmployeeTable";
import TotalTable from "../components/Table/TotalTable/TotalTable";
import styles from "./page.module.scss";

function MainPage() {
  const state = useSelector((state) => state.employees);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.work_area}>
        <div className={styles.emp_area}>
          Сотрудники
          <EmployeeTable />
        </div>
        <div className={styles.total_area}>
          ДНИ
          <TotalTable />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
