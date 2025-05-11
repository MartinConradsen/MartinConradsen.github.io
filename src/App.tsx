import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <><Navigation />
    <main className="container">
      <Header title="Dansk Negroni Forening" tagline="Må Generalen være med dig." />
      <About />
      <Footer />
    </main></>
  );
}

export default App;