import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import { StyledEngineProvider } from "@mui/material";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
