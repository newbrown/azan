import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Router base path - use "/" for site at repository root
const basePath = "/";

createRoot(document.getElementById("root")!).render(
  <Router base={basePath}>
    <App />
  </Router>
);
