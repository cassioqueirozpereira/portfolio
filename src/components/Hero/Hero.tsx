import './Hero.scss';

import euHexagonal from '../../assets/images/eu_hexagonal.png';

const Hero = () => {
  return (
    <section className="top_site">
      <div className="interface">
        <div className="flex d-flex align-items-center justify-content-between">
          <div className="txt_top_site">
            <h1> <span>T</span>RANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span></h1>
            <p>
                Bem-vindo(a) ao meu portfólio digital! Aqui, a criatividade e a inovação se unem para transformar ideias em soluções. Explore uma combinação única de design impactante, funcionalidade intuitiva e otimização focada em resultados.
            </p>
          </div>
          <div className="img_top_site">
            <img className="eu img-fluid" src={euHexagonal} alt="minha foto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;