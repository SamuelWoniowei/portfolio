import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ScrollLinkProvider } from "./ScrollContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollLinkProvider>
      <App />
    </ScrollLinkProvider>
  </React.StrictMode>
);
