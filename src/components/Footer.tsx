import logo from '../assets/images/logo.png';
import feImg from '../assets/images/fe.png';

const Footer = () => {
  return (
    <footer>
      <div className="interface">
        <div className="line_footer border_bottom">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="btn_social">
            <a href="https://www.linkedin.com/in/cassio-queiroz-pereira" target="_blank" rel="noreferrer"><button><i className="bi bi-linkedin"></i></button></a>
            <a href="https://github.com/cassioqueirozpereira" target="_blank" rel="noreferrer"><button><i className="bi bi-github"></i></button></a>
            <a href="https://www.instagram.com/queirozpereiracassio/" target="_blank" rel="noreferrer"><button><i className="bi bi-instagram"></i></button></a>
          </div>
        </div>

        <div className="line_footer">
          <p>
            <i className="bi bi-envelope-fill"></i> 
            <a href="mailto:cassioqueirozpereira@gmail.com"> cassioqueirozpereira<span>@</span>gmail.com</a>
          </p>
          <div className="fe">
            <img src={feImg} alt="Fé" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;