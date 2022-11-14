import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CssBaseline } from "@mui/joy";
import { RootProvider } from "Contexts";
import { Signin } from "Signin";
import { Signup } from "Signup";
import { EmbeddedExplorer } from "./Explorer";

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 8000;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

function App() {
  return (
    <RootProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup/*" element={<Signup />} />
        <Route path="explorer/*" element={<EmbeddedExplorer />} />
      </Routes>
    </RootProvider>
  );
}

export default App;
