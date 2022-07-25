import React from "react";
import UserRoutes from "./Routes";
// import { ReactDOM } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(UserRoutes());
