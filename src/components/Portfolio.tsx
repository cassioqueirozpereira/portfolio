const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="interface">
        <h2 className="title">MEU <span>PORTFÓLIO.</span></h2>

        <div className="flex-container">
          {/* Projeto 1 */}
          <div className="img_port projeto1">
            <a href="https://cassioqueirozpereira.github.io/projeto-cordel/" target="_blank" rel="noreferrer">
              <div className="overlay">Projeto Cordel</div>
            </a>
          </div>

          {/* Projeto 2 */}
          <div className="img_port projeto2">
            <a href="https://github.com/cassioqueirozpereira/Python/blob/main/atividades_internet/primeira-automacao/codigo.py" target="_blank" rel="noreferrer">
              <div className="overlay">Projeto Automação</div>
            </a>
          </div>

          {/* Projeto 3 */}
          <div className="img_port projeto3">
            <a href="https://github.com/cassioqueirozpereira/Python/blob/main/atividades_internet/chat-online/codigo.py" target="_blank" rel="noreferrer">
              <div className="overlay">Projeto Chat online</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;