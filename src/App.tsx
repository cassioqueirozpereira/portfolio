import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './main.scss';
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
        <Footer />
      </main>
    </>
  );
}

export default App;