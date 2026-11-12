import "./CSS/ProtocolHero.css";

function ProtocolHero() {
  return (
    <section className="protocol-hero">
      <div className="protocol-hero-content">
        <div className="protocol-label">
          IRIS NETWORK
        </div>

        <h1>IRIS S2S Protocol</h1>

        <p>
          Palvelinten välinen protokolla hajautettua IRIS-verkkoa varten.
        </p>

        <div className="protocol-badge-row">
          <span className="protocol-badge">IRIS-S2S</span>
          <span className="protocol-badge">Binary Protocol</span>
          <span className="protocol-badge">Multi-server</span>
        </div>
      </div>
    </section>
  );
}

export default ProtocolHero;