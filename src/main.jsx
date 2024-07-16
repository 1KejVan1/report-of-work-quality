import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../src/store/index.js";
import AppRouter from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);
