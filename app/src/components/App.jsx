import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {

  return (
    <div className={style.app}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
