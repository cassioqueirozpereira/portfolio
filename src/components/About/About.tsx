import './About.scss';
import euHexagonal from '../../assets/images/eu.jpeg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="interface">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-md-4 text-center">
            <div className="img-container">
              <img src={euHexagonal} className="img-fluid img-destaque rounded-5 shadow-lg" alt="Sobre mim" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="txt_about">
              <h2 className='title'>Muito prazer, <span>sou o Cássio.</span></h2>
              <p>
                Um desenvolvedor apaixonado por criar soluções digitais que unem estética e performance. Minha jornada é movida pela curiosidade de transformar código em experiências.
              </p>
              <p>
                
              </p>
              <div className="d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
                <a href="https://www.linkedin.com/in/cassio-queiroz-pereira" target='_blank' className="btn-social"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/cassioqueirozpereira" target='_blank' className="btn-social"><i className="bi bi-github"></i></a>
                <a href="https://www.instagram.com/queirozpereiracassio/" target='_blank' className="btn-social"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;