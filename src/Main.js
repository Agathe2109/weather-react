import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
  </StrictMode>
);
