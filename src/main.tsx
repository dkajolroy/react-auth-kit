import React from "react";
import { AuthProvider } from "react-auth-kit";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider
      authType="localstorage"
      authName="authKeys"
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
