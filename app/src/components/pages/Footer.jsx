import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.copy}>
        <p>© 2024 - Todos os direitos reservados</p>
        <p>
          *Este site faz parte do trabalho de conclusão do curso técnico de
          Desenvolvimento de Sistemas da Etec Dra. Ruth Cardoso.
        </p>
      </div>
      <div className={style.social}>
        <ul>
          <li><a href="">Sobre</a></li>
          <li><a href="">Produtos</a></li>
          <li><a href="">Contato</a></li>
          <li><a href="">Termos de uso</a></li>
        </ul>
        <ul>
          <li><a href="">X (Twitter)</a></li>
          <li><a href="">Email</a></li>
          <li><a href="">Github</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </div>
      <a href="mailto:cosmictasks@gmail.com" className={style.email}>
        cosmictasks@gmail.com
      </a>
    </div>
  );
};

export default Footer;