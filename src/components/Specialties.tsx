const Specialties = () => {
  const especialidades = [
    {
      icon: "bi-code-square",
      title: "Website",
      text: "Unindo HTML5, CSS3, JavaScript, PHP, Node.js e outras tecnologias..."
    },
    {
      icon: "bi-filetype-java",
      title: "Programação Multiplataforma",
      text: "Programar em linguagens como Python, C++, Java e sistemas de Banco de Dados..."
    },
    {
      icon: "bi-github",
      title: "Git e Github",
      text: "Controle de versões com Git e GitHub para gerenciamento eficiente de código..."
    }
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