import FeatureCard from './FeatureCard.jsx';
import './FeatureGrid.css';

function FeatureGrid({}) {

const features = [
  {
    icon: '⚡',
    title: 'IRC Daemon',
    description:
        'Alusta asti itse rakennettu Node.js-pohjainen IRC-daemon.'
  },
  {
    icon: '🌐',
    title: 'IRIS-S2S-PROTOCOL',
    description:
         'Oma server-to-server-protokolla, joka yhdistää IRIS-verkon palvelimet.'
  },
  {
    icon: '🧬',
    title: 'Distributed Network',
    description:
        'Verkon tila, identiteetit, reititys ja synkronointi palvelinten välillä.'
  },
];


  return (
    <section
      id="non"
      className="features"
    >
<div className="features__header"> 
<p>THE IRIS STACK</p> 

<h2>
  Built around our own{' '}
  <span>protocol.</span>
</h2>

<div className="features__subtitle">
  IRIS-S2S PROTOCOL
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