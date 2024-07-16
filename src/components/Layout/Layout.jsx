import { Outlet } from "react-router";

import styles from "./layout.module.scss";

function Layout() {
  return (
    <>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
