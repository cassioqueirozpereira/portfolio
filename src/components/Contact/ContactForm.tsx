import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import './ContactForm.scss';

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // FORÇAR O TELEFONE: Pegamos o valor direto do estado 'phone'
    // Isso evita que o Formspree receba apenas o prefixo +55
    formData.set('Telefone', `+${phone}`); 

    try {
      const response = await fetch("https://formspree.io/f/xeogybay", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = "https://cassioqueirozpereira.github.io/agradecimento_form/";
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      alert("Erro de rede. Verifique sua conexão.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contato" className="contact_section">
      <div className="interface">
        <h2 className="title">Me mande uma <span>mensagem.</span></h2>
        
        <div className="contact_card">
          <form onSubmit={handleSubmit}>
            <div className="input_group">
              <input type="text" name="Nome" id="name" required placeholder=" " />
              <label htmlFor="name">Nome Completo</label>
            </div>

            <div className="input_group">
              <input type="email" name="Email" id="email" required placeholder=" " />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input_group phone_group">
              <label className="active_label">Telefone</label>
              <PhoneInput
                country={'br'}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputProps={{
                  required: true,
                  name: 'Telefone'
                }}
                containerClass="phone_container"
                inputClass="phone_input"
                buttonClass="phone_button"
              />
            </div>

            <div className="input_group">
              <textarea name="Mensagem" id="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Sua mensagem</label>
            </div>

            <div className="btn_container">
              <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar agora"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;