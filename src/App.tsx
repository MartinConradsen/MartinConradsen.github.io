import About from './components/About';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <main className="container">
        <About />
        <Footer />
      </main>
    </PageWrapper>
  );
}

export default App;
