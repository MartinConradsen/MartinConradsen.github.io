import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <main className="container">
        <Header title="Dansk Negroniforening" tagline="Må Generalen være med dig." />
        <About />
        <Footer />
      </main>
    </PageWrapper>
  );
}

export default App;
