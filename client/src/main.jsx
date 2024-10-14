import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async"; // Keep this if needed for managing head elements (e.g., title, meta tags)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Removed Redux store as it's not needed for frontend-only */}
    <HelmetProvider>
      <CssBaseline />
      <div onContextMenu={(e) => e.preventDefault()}>
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
