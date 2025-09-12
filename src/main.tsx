import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Lenis from "lenis";

// Init Lenis smooth scroll
const lenis = new Lenis({ autoRaf: true, duration: 1.8 });
lenis.on("scroll", () => {});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
