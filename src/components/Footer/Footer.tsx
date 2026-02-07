import './Footer.scss';
import logo from '../../assets/images/logo.png';
import imgFe from '../../assets/images/fe.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="interface">
        
        {/* LINHA SUPERIOR */}
        <div className="line_footer border_bottom d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="logo logo-transition mb-4 mb-md-0">
            <a href="#contato">
              <img src={logo} alt="Logo Cássio" />
            </a>
          </div>
          <div className="social-links d-flex gap-3">
            <a href="https://www.linkedin.com/in/cassio-queiroz-pereira" target='_blank' className="btn-social"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/cassioqueirozpereira" target='_blank' className="btn-social"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/queirozpereiracassio/" target='_blank' className="btn-social"><i className="bi bi-instagram"></i></a>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="line_footer d-flex justify-content-between align-items-center flex-column flex-md-row mt-4">
          <p className="m-0">
            <i className="bi bi-envelope-fill text-success me-2"></i> 
            <a href="mailto:cassioqueirozpereira@gmail.com" target='_blank' className="underline text-white text-decoration-none">
              cassioqueirozpereira<span>@</span>.com
            </a>
          </p>
          <div className="fe mt-4 mt-md-0">
            <img src={imgFe} alt="Fé" style={{ maxWidth: '100px' }} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;