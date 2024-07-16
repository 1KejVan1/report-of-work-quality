import { useSelector } from "react-redux";

import Menu from "../components/Menu/Menu";
import Table from "../components/Table/Table";
import styles from "./page.module.scss";

function MainPage() {
  const state = useSelector((state) => state.employees);

  const rel = {
    from: 0,
    to: 10,
    length: 10,
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.work_area}>
        <Table />
        {/* <div style={{ display: "flex" }}>
          <Table />
        </div> */}
      </div>
    </div>
  );
}

export default MainPage;
