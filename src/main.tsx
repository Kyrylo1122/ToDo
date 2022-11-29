import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./views/App";

import "./views/Styles/Reset.scss";
import "./views/Styles/Common.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
