import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sanitize.css";
import "./globals.css";
import "./index.css";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
