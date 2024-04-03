
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PageAddCard from "./app/PageAddCard"
import Sidebar from "./app/Sidebar";
import ModalNewcard from "./app/modal/ModalNewCard";


function App() {
 

  return (
    <div className={style.app}>
      <PageAddCard/>
    
        

    </div>
  );
}

export default App;
