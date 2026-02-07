import { useState } from 'react'; // Faltava o import do React/useState
import "./Header.scss";
import logo from '../../assets/images/logo.png'; // Verifique se o caminho está correto

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const menuItems = [
    { nome: 'HOME', link: '#' },
    { nome: 'HABILIDADES', link: '#specialties' },
    { nome: 'SOBRE', link: '#about' },
    { nome: 'PROJETOS', link: '#portfolio' },
    { nome: 'CONTATO', link: '#contato' }
  ];

  return (
    <header className="interface sticky-top bg-black shadow-lg py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between px-4">
        
        <div className="logo">
          <a href="#contato">
            <img src={logo} alt="logo" style={{ height: '60px' }} className="img-fluid transition-scale" />
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="menu_desktop d-none d-lg-block">
          <ul className="d-flex list-unstyled m-0 gap-4">
            <li><a href="#" className="text-decoration-none text-secondary-hover fw-semibold">HOME</a></li>
            <li><a href="#specialties" className="text-decoration-none text-secondary-hover fw-semibold">HABILIDADES</a></li>
            <li><a href="#about" className="text-decoration-none text-secondary-hover fw-semibold">SOBRE</a></li>
            <li><a href="#portfolio" className="text-decoration-none text-decoration-none text-secondary-hover fw-semibold">PROJETOS</a></li>
          </ul>
        </nav>
        
        <div className="btn_contato d-none d-md-block">
          <a href="#contato">
            <button className="btn btn-success rounded-pill px-4 fw-bold shadow-sm transition-hover border-0" style={{backgroundColor: '#00ff00', color: '#000'}}>
               CONTATO
            </button>
          </a>
        </div>

        <div className="btn_abrir_menu d-lg-none" onClick={() => setMenuAberto(true)}>
          <i className="bi bi-list text-success fs-1" style={{cursor: 'pointer'}}></i>
        </div>

        {/* MENU MOBILE */}
        <div className={`menu_mobile ${menuAberto ? 'abrir_menu' : ''} shadow-lg`}>
          <div className="text-end p-4" onClick={() => setMenuAberto(false)}>
            <i className="bi bi-x-lg text-success fs-3" style={{cursor: 'pointer'}}></i>
          </div>

          <nav className="mt-5">
            <ul className="list-unstyled">
              {menuItems.map((item) => (
                <li key={item.nome}  className="border-bottom border-secondary-subtle">
                  <a 
                    href={item.link} 
                    className="d-block py-3 px-5 text-white text-decoration-none hover-bg-green"
                    onClick={() => setMenuAberto(false)}
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {menuAberto && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" 
            style={{ zIndex: 8888, backdropFilter: 'blur(.5px)' }}
            onClick={() => setMenuAberto(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;