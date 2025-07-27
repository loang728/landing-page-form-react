import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './style/main.scss';

function App() {
  return (
    <div className="page-wrapper">
     <Header />
     <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;


