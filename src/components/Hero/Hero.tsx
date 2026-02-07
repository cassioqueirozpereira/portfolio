import './Hero.scss';
import euHexagonal from '../../assets/images/eu_hexagonal.png';

const Hero = () => {
  return (
    <section className="top_site py-5">
      <div className="interface">
        {/* 'align-items-center' garante que texto e imagem fiquem alinhados pelo meio horizontalmente */}
        <div className="row gy-5 align-items-center justify-content-center">

          {/* Ajustei para col-md-8 para a foto aparecer melhor, mas sinta-se livre para voltar para 10 se preferir */}
          <div className="col-12 col-md-8 txt_top_site text-center text-md-start">
            <h1> 
              <span>T</span>RANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span>
            </h1>
            <p className="mt-4">
              Bem-vindo(a) ao meu portfólio digital! Explore uma combinação única de design impactante, funcionalidade intuitiva e otimização focada em resultados.
            </p>
            <p>
              O site é totalmente responsivo, adaptando-se perfeitamente a telas de computador e celular, com um prático menu sanduíche para mobilidade.
            </p>
            <p className="mb-0">
              Não deixe de entrar em contato comigo, é só preencher o formulário e me enviar sua mensagem.
            </p>
          </div>

          <div className="col-12 col-md-4 img_top_site text-center">
            <img 
              className="eu img-fluid img-destaque" 
              src={euHexagonal} 
              alt="minha foto" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;