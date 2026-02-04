import './Specialties.scss';

const Specialties = () => {
  const especialidades = [
    {
      icon: "bi-code-square",
      title: "Website",
      text: "Unindo React.js com HTML, Sass, Typescript, Bootstrap e outras tecnologias..."
    },
    {
      icon: "bi-github",
      title: "Git e Github",
      text: "Controle de versões com Git e GitHub para gerenciamento eficiente de código..."
    },    {
      icon: "bi-filetype-java",
      title: "Programação Multiplataforma",
      text: "Programar em linguagens como C#.NET, Java, Python com Banco de Dados..."
    },
  ];

  return (
    <section id="specialties" className="specialties">
      <div className="interface">
        <h2 className="title">MINHAS <span>ESPECIALIDADES.</span></h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
          {especialidades.map((item, index) => (
            <div key={index} className="specialties_box">
              <i className={`bi ${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;