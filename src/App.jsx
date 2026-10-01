import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Architecture from './components/Architecture/Architecture.jsx';
import Protocol from './components/Protocol/Protocol.jsx';
import FeatureGrid from './components/FeatureGrid/FeatureGrid';
import ProjectImages from './components/ProjectImages/ProjectImages.jsx';
import Footer from './components/Footer/Footer';
import Licence from './components/Licence/Licence.jsx';
import Sanasto from './components/Sanasto/Sanasto.jsx';
import Footer2 from './components/Footer/Footer2.jsx';

import './App.css';

function App() {
  return (
    <div
      id="top"
      className="app"
    >
      <Navbar />

      <main>
        <Hero />
        <FeatureGrid />
        <Architecture />
        <Protocol />
        <ProjectImages/>
        <Sanasto/>
        <Licence/>
      </main>

      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;