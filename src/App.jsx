import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Architecture from './components/Architecture/Architecture.jsx';
import FeatureGrid from './components/FeatureGrid/FeatureGrid';
import ProjectImages from './components/ProjectImages/ProjectImages.jsx';
import Footer from './components/Footer/Footer';
import './App.css';

const features = [
  {
    icon: '⚡',
    title: 'IRC Daemon',
    description:
        'Alusta asti itse rakennettu Node.js-pohjainen IRC-daemon.'
  },
  {
    icon: '🌐',
    title: 'IRIS-S2S',
    description:
         'Oma server-to-server-protokolla, joka yhdistää IRIS-verkon palvelimet.'
  },
  {
    icon: '🧬',
    title: 'Distributed Network',
    description:
        'Verkon tila, identiteetit, reititys ja synkronointi palvelinten välillä.'
  },
  {
    icon: '🔐',
    title: 'Protocol First',
    description:
       'Rakennettu eksplisiittisten protokollakehysten, validoinnin ja tilan ympärille.'
  }
];

function App() {
  return (
    <div
      id="top"
      className="app"
    >
      <Navbar />

      <main>
        <Hero />
        <Architecture />
        <ProjectImages/>
        <FeatureGrid features={features} />
      </main>

      <Footer />
    </div>
  );
}

export default App;