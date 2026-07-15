import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
