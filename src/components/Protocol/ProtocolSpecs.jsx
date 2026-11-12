import "./CSS/ProtocolSpecs.css";

function ProtocolSpecs({ }) {

const protocolInfo = [
  ["Protokolla", "IRIS-S2S"],
  ["Tyyppi", "Binääriprotokolla"],
  ["Header", "32 tavua"],
  ["Maksimi payload", "1 MB"],
  ["Chunk-koko", "64 KiB"],
  ["ACK", "Käytössä"],
  ["Handshake timeout", "10 s"],
  ["Connection queue", "1000"],
  ["Server ID", "iris-01"],
  ["Server role", "hub"],
  ["Message ID", "Käytössä"],
  ["Multi-server", "Käytössä"],
  ["Channel sync", "Käytössä"],
  ["CLIENT-propagointi", "iris-03 → iris-02 → iris-01"],
  ["Käyttötarkoitus", "Hajautettu IRIS-verkko"],
];

  return (
    <section className="protocol-specs-section">
      <div className="section-card">
        <span className="section-number">01</span>

        <div>
          <span className="section-kicker">SPECIFICATION</span>
          <h2>Protokollan ominaisuudet</h2>
        </div>
      </div>

      <div className="protocol-spec-grid">
        {protocolInfo.map(([name, value]) => (
          <div className="protocol-spec-card" key={name}>
            <span className="spec-name">{name}</span>
            <strong className="spec-value">{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProtocolSpecs;