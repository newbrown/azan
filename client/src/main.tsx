import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Use /azan/ as the base path for GitHub Pages repository
const basePath = "/azan";

createRoot(document.getElementById("root")!).render(
  <Router base={basePath}>
    <App />
  </Router>
);
