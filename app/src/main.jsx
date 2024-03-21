import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarCheck,
  faMobileScreen,
  faPalette,
  faPuzzlePiece,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCalendarCheck,
  faMobileScreen,
  faPalette,
  faPuzzlePiece,
  faPenToSquare
);
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./components/pages/LandingPage.jsx";
import LoginPage from "./components/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
