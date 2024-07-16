import { Route, Routes } from "react-router";

import Layout from "../components/Layout/Layout";
import MainPage from "../page/MainPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
