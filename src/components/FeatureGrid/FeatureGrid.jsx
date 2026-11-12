
import FeatureCard from './FeatureCard.jsx';
import './FeatureGrid.css';

function FeatureGrid() {

  const features = [
    {
      icon: '⚡',
      title: 'IRC Daemon',
      description: 'Oma IRC-palvelinohjelmisto Node.js:llä.'
    },
    {
      icon: '🌐',
      title: 'IRIS-S2S',
      description: 'Oma protokolla palvelinten väliseen viestintään.'
    },
    {
      icon: '🔗',
      title: 'Server Network',
      description: 'Palvelinten välinen yhteys, reititys ja synkronointi.'
    },
  ];

  return (
    <section className="features">
      <div className="features__header">
        <p>IRIS IRCd</p>

        <h2>
          IRC, built <span>from scratch.</span>
        </h2>

        <div className="features__subtitle">
          NODE.JS · IRC · IRIS-S2S
        </div>
      </div>

      <div className="features__grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;
