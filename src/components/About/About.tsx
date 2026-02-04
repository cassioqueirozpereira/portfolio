import './About.scss';
import euImg from '../../assets/images/eu.jpeg';

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
              Sou um profissional focado em tecnologia, unindo uma sólida experiência em otimização de processos industriais com o desenvolvimento de software. Valorizo a colaboração, a análise crítica e a construção de soluções que gerem impacto real na eficiência das organizações.
            </p>

            <p>
              Atualmente, curso Análise e Desenvolvimento de Sistemas e dedico-me à criação de ferramentas de automação e análise de dados. Meu foco técnico está no ecossistema <strong>C# .NET, Python, Java e SQL</strong>. Tenho experiência prática no desenvolvimento de aplicações que otimizam tarefas complexas, transformando dados em inteligência de negócio com o uso de <strong>Power BI</strong> e soluções <strong>Back-end</strong>.
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