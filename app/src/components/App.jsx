import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function App() {

  return (
    <div className={style.app}>
        
        <admCaixa/>
    </div>
  );
}

export default App;
