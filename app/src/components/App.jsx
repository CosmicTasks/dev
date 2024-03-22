import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import SecSidebar from "./app/SecSidebar";

function App() {
  return (
    <div className={style.app}>
      <Sidebar />
      <SecSidebar />
    </div>
  );
}

export default App;
