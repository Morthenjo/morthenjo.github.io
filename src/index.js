import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoolText from "./components/AOS";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="...Loading">
    <App />
    <CoolText />
  </Suspense>
);
