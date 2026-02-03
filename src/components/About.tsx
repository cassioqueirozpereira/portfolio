import euImg from '../assets/images/eu.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="interface">
        <div className="flex-container">
          {/* Lado da Imagem */}
          <div className="img_about">
            <img src={euImg} alt="Cássio Queiroz" />
          </div>

          {/* Lado do Texto */}
          <div className="txt_about">
            <h2>
              MUITO PRAZER, SOU <span>CÁSSIO QUEIROZ PEREIRA</span>
            </h2>
            
            <h4>SOBRE MIM:</h4>

            <p>
              Sou um profissional movido por um forte senso de responsabilidade e empatia, sempre buscando contribuir positivamente em qualquer equipe e ambiente. Valorizo imensamente a colaboração e a construção de bons relacionamentos interpessoais.
            </p>

            <p>
              Atualmente, dedico meu tempo livre ao desenvolvimento de projetos que otimizam tarefas diárias, com foco principal em programação C/C++. Em paralelo, aprimoro continuamente minhas habilidades em Análise e Desenvolvimento de Sistemas, com foco em Banco de Dados, Power BI e desenvolvimento Back-end.
            </p>

            {/* Redes Sociais */}
            <div className="btn_social">
              <a href="https://www.linkedin.com/in/cassio-queiroz-pereira" target="_blank" rel="noreferrer">
                <button><i className="bi bi-linkedin"></i></button>
              </a>
              <a href="https://github.com/cassioqueirozpereira" target="_blank" rel="noreferrer">
                <button><i className="bi bi-github"></i></button>
              </a>
              <a href="https://www.instagram.com/queirozpereiracassio/" target="_blank" rel="noreferrer">
                <button><i className="bi bi-instagram"></i></button>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075939005941" target="_blank" rel="noreferrer">
                <button><i className="bi bi-facebook"></i></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;