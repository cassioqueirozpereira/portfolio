import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Specialties from './components/Specialties/Specialties';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Portfolio />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

export default App;