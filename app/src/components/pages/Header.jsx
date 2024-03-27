import style from './Header.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/" className={style.brand} ><img src={logo} alt='Logo'/></Link>
      <nav className={style.navLinks}>
        <a href="#">Produtos</a>
        <a href="#">Planos</a>
        <a href="#">Sobre</a>
      </nav>
      <div className={style.buttons}>
        <Link to="login" className={style.login}>Entrar</Link>
        <Link to="cadastro" className={style.cadastrar}>Iniciar jornada</Link>
      </div>
    </div>
  )
}

export default Header