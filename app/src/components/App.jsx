import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "./app/flashcards/containers/SideBar";
import { useEffect } from "react";
import HomePage from "./app/flashcards/pages/HomePage";




function App() {
 



  // persists decks to local storage
 

  return (
    <div className="App">


    <div className={style.app}>
      <Sidebar />
      <Outlet />
    </div>
    
    </div>
  
  );
}

export default App;
