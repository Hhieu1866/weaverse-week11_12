import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
  duration: 1.8,
  smoothWheel: true,
  syncTouch: true,
});

window.lenis = lenis;

lenis.on("scroll", () => {});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
