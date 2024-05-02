import style from './PagePomo.module.css'
import Timer from './Timer'
import Settings from './Settings'
import { useState } from 'react'
import SettingsContext from './SettingsContext'
const PagePomo = () => {
  


  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className={style.pagePomo}>
      <div className={style.pomoBody}>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings/> :  <Timer estilo={style} />}
        </SettingsContext.Provider>
        
        
        
      </div>
    </div>
  )
}

export default PagePomo