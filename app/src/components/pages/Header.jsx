import style from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={style.header}>
      <a href="#" className={style.brand}><img src={logo} alt='Logo'/></a>
      <nav className={style.navLinks}>
        <a href="#">Produtos</a>
        <a href="#">Planos</a>
        <a href="#">Sobre</a>
      </nav>
      <div className={style.buttons}>
        <a href="#" className={style.login}>Entrar</a>
        <a href="#" className={style.cadastrar}>Iniciar jornada</a>
      </div>
    </div>
  )
}

export default Header