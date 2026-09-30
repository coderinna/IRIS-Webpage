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
      'A custom Node.js IRC daemon built from the ground up.'
  },
  {
    icon: '🌐',
    title: 'IRIS-S2S',
    description:
      'A custom server-to-server protocol connecting the IRIS network.'
  },
  {
    icon: '🧬',
    title: 'Distributed Network',
    description:
      'Network state, identities, routing and synchronization across servers.'
  },
  {
    icon: '🔐',
    title: 'Protocol First',
    description:
      'Designed around explicit protocol frames, validation and state.'
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