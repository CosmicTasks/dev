import style from './PagePomo.module.css'
import Timer from './Timer'

const PagePomo = () => {
  return (
    <div className={style.pagePomo}>
      <div className={style.pomoBody}>
        <Timer estilo={style} />
      </div>
    </div>
  )
}

export default PagePomo