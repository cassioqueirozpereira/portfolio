import './Specialties.scss';

const Specialties = () => {
  const skills = [
    { icon: 'bi-code-slash', title: 'Development', desc: 'Criação de sites modernos e responsivos com React.js, Typescript, SASS, Bootstrap e outras tecnologias. Conhecimento em C# .NET, JAVA, e Banco de Dados.' },
    { icon: 'bi-cpu', title: 'Performance', desc: 'Foco em velocidade de carregamento e otimização de código para SEO.' },
    { icon: 'bi-phone', title: 'Mobile Friendly', desc: 'Interfaces otimizadas para uma experiência perfeita em dispositivos móveis.' }
  ];

  return (
    <section className="specialties py-5" id="specialties">
      <div className="interface">
        <h2 className="title mb-5">Minhas <span>Habilidades.</span></h2>
        
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="specialty-card p-4 h-100 transition-up shadow">
                <div className="icon-box mb-3">
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <h3>{skill.title}</h3>
                <p className="m-0">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;