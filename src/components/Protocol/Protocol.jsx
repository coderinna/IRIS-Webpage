import React from "react";
import "./Protocol.css";

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

const messageTypes = [
  ["HELLO", "0x01"],
  ["AUTH", "0x02"],
  ["SERVER", "0x03"],
  ["READY", "0x04"],
  ["CLIENT", "0x10"],
  ["NICK", "0x11"],
  ["JOIN", "0x12"],
  ["PART", "0x13"],
  ["QUIT", "0x14"],
  ["MESSAGE", "0x15"],
  ["NOTICE", "0x16"],
  ["PING", "0x20"],
  ["PONG", "0x21"],
  ["ACK", "0x22"],
];

function Protocol() {
  return (
    <main id="protocol" className="protocol-page">
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

      <section className="protocol-container">
        <div className="protocol-intro">
          <div>
            <span className="section-kicker">PROTOCOL</span>
            <h2>Palvelinten välinen viestintä</h2>
          </div>

          <p>
            IRIS-S2S on palvelinten välinen protokolla. Se ei ole IRC-clientin
            protokolla, vaan sitä käytetään IRIS-palvelinten väliseen
            tiedonsiirtoon ja verkon synkronointiin.
          </p>
        </div>

        <section className="protocol-section">
          <div className="section-heading">
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

        <section className="protocol-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-kicker">MESSAGES</span>
              <h2>Viestityypit</h2>
            </div>
          </div>

          <div className="message-table-wrapper">
            <table className="message-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Code</th>
                </tr>
              </thead>

              <tbody>
                {messageTypes.map(([type, code]) => (
                  <tr key={type}>
                    <td>
                      <span className="message-type">{type}</span>
                    </td>

                    <td>
                      <code>{code}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="protocol-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-kicker">NETWORK</span>
              <h2>IRIS S2S Network</h2>
            </div>
          </div>

          <div className="protocol-diagram">
            <div className="diagram-title">
              IRIS S2S PROTOCOL
            </div>

            <div className="diagram-network">
              <div className="server-node">
                <div className="server-icon">01</div>
                <strong>iris-01</strong>
                <span>IRCd</span>
              </div>

              <div className="connection-area">
                <div className="connection-line">
                  <span className="connection-arrow left">◀</span>
                  <span className="connection-label">
                    S2S frames
                  </span>
                  <span className="connection-arrow right">▶</span>
                </div>

                <div className="protocol-flow">
                  <span>HELLO</span>
                  <span>AUTH</span>
                  <span>SERVER</span>
                  <span>READY</span>
                  <span>CLIENT</span>
                  <span>NICK</span>
                  <span>JOIN</span>
                  <span>PART</span>
                  <span>MESSAGE</span>
                  <span>QUIT</span>
                  <span>PING</span>
                  <span>PONG</span>
                </div>
              </div>

              <div className="server-node">
                <div className="server-icon">02</div>
                <strong>iris-02</strong>
                <span>IRCd</span>
              </div>
            </div>
          </div>
        </section>

        <section className="protocol-section protocol-purpose">
          <div className="purpose-card">
            <div className="purpose-icon">◆</div>

            <div>
              <span className="section-kicker">PURPOSE</span>
              <h2>Hajautettu IRIS-verkko</h2>

              <p>
                IRIS-S2S mahdollistaa useiden IRIS-palvelinten välisen
                kommunikaation, asiakkaiden propagoinnin sekä kanavien
                synkronoinnin palvelinten välillä.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Protocol;
