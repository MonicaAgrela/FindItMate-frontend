import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "../context/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProviderWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProviderWrapper>
  </BrowserRouter>
);
