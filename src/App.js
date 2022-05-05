import './App.scss';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Roadmap from './components/Roadmap/Roadmap';
import Gallery from './components/Gallery/Gallery';
import Market from './components/Market/Market';
import Faq from './components/Faq/Faq';
import Merch from './components/Merch/Merch';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <Welcome />
        <Roadmap />
        <Gallery />
        <Market />
        <Faq />
        <Merch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
