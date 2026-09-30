import FeatureCard from './FeatureCard.jsx';
import './FeatureGrid.css';

function FeatureGrid({ features }) {
  return (
    <section
      id="protocol"
      className="features"
    >
      <div className="features__header">
        <p>THE IRIS STACK</p>

        <h2>
          Built around the
          <span> protocol.</span>
        </h2>
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