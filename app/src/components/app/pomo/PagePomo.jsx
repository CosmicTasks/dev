import style from './PagePomo.module.css'
import Timer from './Timer'
import Settings from './Settings'
import { useState } from 'react'
const PagePomo = () => {
  


  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className={style.pagePomo}>
      <div className={style.pomoBody}>
        {showSettings ? <Settings/> :  <Timer estilo={style} />}
        
        
      </div>
    </div>
  )
}

export default PagePomo