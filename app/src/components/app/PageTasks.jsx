import { useState, useEffect } from "react";
import SecSidebar from "./SecSidebar";
import style from "./PageTasks.module.css";
import {
  UilArrowToRight,
  UilLeftArrowToLeft,
  UilSlidersV,
  UilGrid,
  UilAngleDown,
  UilCircle,
} from "@iconscout/react-unicons";
import useListas from "./listas/Listas";

const PageTasks = () => {
  const [sidebar, setSidebar] = useState(true);
  const { listas, setListas, addLista } = useListas();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:4000/api/users");
      const data = await response.json();
      setUsers(data)
    }
    fetchUsers();
  }, []);

  return (
    <>
      <SecSidebar isOpen={sidebar} listas={listas} addLista={addLista} />
      <div className={style.tasksBody}>
        <div className={style.tasksHeader}>
          <div className={style.switchSidebarContainer}>
            {sidebar ? (
              <UilLeftArrowToLeft
                size="18"
                color="var(--c11)"
                onClick={() => setSidebar(false)}
              />
            ) : (
              <UilArrowToRight
                size="18"
                color="var(--c11)"
                onClick={() => setSidebar(true)}
              />
            )}
            <h1 className={style.listTitle}>Hoje</h1>
          </div>
          <div className={style.gridSettings}>
            <UilSlidersV size="18" color="var(--c11)" />
            <UilGrid size="18" color="var(--c11)" />
          </div>
        </div>
        {users && users.map((user) => (
          <div key={user._id} className={style.user}>
            <UilCircle size="12" color="var(--c11)" />
            <span>{user.nome}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageTasks;
