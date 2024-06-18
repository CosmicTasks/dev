import style from "./PagePomo.module.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState, useEffect } from "react";
import SettingsContext from "./SettingsContext";
const PagePomo = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [anotacao, setAnotacao] = useState(
    localStorage.getItem("anotacao") || ""
  );

  useEffect(() => {
    localStorage.setItem("anotacao", anotacao);
  }, [anotacao]);

  return (
    <div className={style.pagePomo}>
      <div className={style.pomoBody}>
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer estilo={style} />}
        </SettingsContext.Provider>
      </div>
      <div className={style.divAnotacoes}>
        <textarea
          className={style.anotacao}
          placeholder="Use este espaço para anotações de baixa prioridade"
          value={anotacao}
          onChange={(e) => setAnotacao(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default PagePomo;
