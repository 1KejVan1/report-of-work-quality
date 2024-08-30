import { useSelector } from "react-redux";

import Menu from "../components/Menu/Menu";
import EmployeeTable from "../components/Table/EmployeeTable/EmployeeTable";
import TotalTable from "../components/Table/TotalTable/TotalTable";
import UserLine from "../components/UserLine/UserLine";
import styles from "./page.module.scss";

function MainPage() {
  const state = useSelector((state) => state.employees);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.work_area}>
        {state.map((employee) => {
          return <UserLine userName={employee.name} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
