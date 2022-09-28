import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContextProvider} from "./ThemeContext"


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Router>
      <ThemeContextProvider>
      <App />
      </ThemeContextProvider>
    </Router>
  //  </React.StrictMode>
);
