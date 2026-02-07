import './Portfolio.scss';

const Portfolio = () => {
  const projetos = [
    { id: 'projeto1', titulo: 'Projeto Cordel', link: '#' },
    { id: 'projeto2', titulo: 'Projeto Automação', link: '#' },
    { id: 'projeto3', titulo: 'Projeto Chat Online', link: '#' }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="interface">
        <h2 className="title">MEU <span>PORTFÓLIO.</span></h2>
        <div className="flex-container">
          {projetos.map((proj) => (
            <div key={proj.id} className={`img_port ${proj.id}`}>
              <a href={proj.link} target="_blank" rel="noreferrer">
                <div className="overlay">
                  <span>{proj.titulo}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;