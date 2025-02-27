import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProviderApp from "./app/Provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderApp />
  </StrictMode>
);
