import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./core/Home";

export default function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default Routes;
