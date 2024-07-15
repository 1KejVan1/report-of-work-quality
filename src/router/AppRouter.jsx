import { Route, Routes } from "react-router";

import App from "../App";
import Layout from "../components/Layout/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
