import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
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
import ErrorPage from "./components/ErrorPage.jsx";
import PageTasks from "./components/app/PageTasks.jsx";
import PageCards from "./components/app/PageCards.jsx";
import Markdown from "./components/app/markdown/Markdown.jsx";

// Contextos
import { UserContextProvider } from "./context/UserContext.jsx";
import { ListaContextProvider } from "./context/ListaContext.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/pt-br';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "app",
    element: (
      <ListaContextProvider>
        <TaskContextProvider>
          <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="pt-br"
          >
            <App />
          </LocalizationProvider>
        </TaskContextProvider>
      </ListaContextProvider>
    ),
    children: [
      {
        index: true,
        element: <PageTasks tipo={"hoje"} />,
      },
      {
        path: "tasks",
        children: [
          {
            index: true,
            path: "hoje",
            element: <PageTasks tipo={"hoje"} />,
          },
          {
            path: "entrada",
            element: <PageTasks tipo={"entrada"} />,
          },
          {
            path: "excluidas",
            element: <PageTasks tipo={"excluidas"} />,
          },
          {
            path: "atrasadas",
            element: <PageTasks tipo={"atrasadas"} />,
          },
          {
            path: "concluidas",
            element: <PageTasks tipo={"concluidas"} />,
          },
          {
            path: ":idLista",
            element: <PageTasks tipo={"lista"} />,
          }
        ],
      },
      {
        path: "cards",
        element: <PageCards />,
      },
      {
        path: "notes",
        element: <Markdown />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage acao={"login"} />,
  },
  {
    path: "cadastro",
    element: <LoginPage acao={"cadastro"} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
