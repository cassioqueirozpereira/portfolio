import React from 'react';
import './ContactForm.scss';

const ContactForm: React.FC = () => {
  return (
    <section id="contato" className="contact_section">
      <div className="interface">
        <h2 className="title">Me mande uma <span>mensagem.</span></h2>
        
        <div className="contact_card">
          <form action="https://formspree.io/f/xeogybay" method="POST">

            <input type="hidden" name="_next" value="https://cassioqueirozpereira.github.io/agradecimento_form/" />
            
            <div className="input_group">
              <input type="text" name="name" id="name" required placeholder=" " />
              <label htmlFor="name">Nome Completo</label>
            </div>

            <div className="input_group">
              <input type="email" name="email" id="email" required placeholder=" " />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input_group">
              <input type="tel" name="phone" id="phone" required placeholder=" " pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" />
              <label htmlFor="phone">Telefone</label>
            </div>

            <div className="input_group">
              <textarea name="message" id="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Sua mensagem</label>
            </div>

            <div className="btn_container">
              <button type="submit">Enviar agora</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;