import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import SecSidebar from "./app/SecSidebar";
import ModalNewList from "./app/modal/ModalNewList";

function App() {
  return (
    <div className={style.app}>
      <Sidebar />
      <SecSidebar />
      <ModalNewList />
    </div>
  );
}

export default App;
