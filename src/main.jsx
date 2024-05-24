import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormState from "./contexts/FormState.jsx";
import CountryState from "./contexts/CountryState.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CountryState>
      <FormState>
        <RouterProvider router={router} />
      </FormState>
    </CountryState>
);