import "./Header.scss";
import { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  // Estado para controlar se o menu está aberto ou não
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="#contato">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <nav className="menu_desktop">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#specialties">HABILIDADES</a></li>
            <li><a href="#about">SOBRE</a></li>
            <li><a href="#portfolio">PROJETOS</a></li>
          </ul>
        </nav>
        
        <div className="btn_contato">
          <a href="#contato"><button>CONTATO</button></a>
        </div>

        {/* BOTÃO ABRIR MENU (Sanduíche) */}
        <div className="btn_abrir_menu" onClick={() => setMenuAberto(true)}>
          <i className="bi bi-list"></i>
        </div>

        {/* MENU MOBILE - A classe 'abrir_menu' só aparece se menuAberto for true */}
        <div className={`menu_mobile ${menuAberto ? 'abrir_menu' : ''}`} id="menu_mobile">
          <div className="btn_fechar" onClick={() => setMenuAberto(false)}>
            <i className="bi bi-x-lg"></i>
          </div>

          <nav>
            <ul>
              <li><a href="#" onClick={() => setMenuAberto(false)}>HOME</a></li>
              <li><a href="#specialties" onClick={() => setMenuAberto(false)}>HABILIDADES</a></li>
              <li><a href="#about" onClick={() => setMenuAberto(false)}>SOBRE</a></li>
              <li><a href="#portfolio" onClick={() => setMenuAberto(false)}>PROJETOS</a></li>
              <li><a href="#contato" onClick={() => setMenuAberto(false)}>CONTATO</a></li>
            </ul>
          </nav>
        </div>

        {/* OVERLAY - Só aparece quando o menu está aberto */}
        {menuAberto && (
          <div 
            className="overlay_menu" 
            style={{ display: 'block' }} 
            onClick={() => setMenuAberto(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;