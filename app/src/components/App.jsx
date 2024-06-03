import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";





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
