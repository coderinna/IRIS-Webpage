
import React from "react";
import "./CSS/ProtocolDiagram.css";

const servers = [
  { id: "01", name: "iris-01", position: "top-left" },
  { id: "02", name: "iris-02", position: "top-right" },
  { id: "03", name: "iris-03", position: "center" },
  { id: "04", name: "iris-04", position: "bottom-left" },
  { id: "05", name: "iris-05", position: "bottom-right" },
];

function ProtocolDiagram() {
  return (
    <div className="protocol-diagram">
      <div className="section-card">
        <span className="section-number">03</span>

        <div>
          <span className="section-kicker">DISTRIBUTED NETWORK</span>
          <h2>MULTI-SERVER NETWORK</h2>
        </div>
      </div>

      <div className="diagram-title">
        IRIS S2S DISTRIBUTED NETWORK
      </div>

      <div className="network-topology">
        <svg
          className="network-connections"
          viewBox="0 0 800 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Central server connections */}
          <line x1="400" y1="210" x2="150" y2="85" />
          <line x1="400" y1="210" x2="650" y2="85" />
          <line x1="400" y1="210" x2="150" y2="335" />
          <line x1="400" y1="210" x2="650" y2="335" />

          {/* Peer-to-peer connections */}
          <line x1="150" y1="85" x2="650" y2="85" />
          <line x1="150" y1="335" x2="650" y2="335" />
          <line x1="150" y1="85" x2="150" y2="335" />
          <line x1="650" y1="85" x2="650" y2="335" />
        </svg>

        {servers.map((server) => (
          <div
            className={`server-node ${server.position}`}
            key={server.id}
          >
            <div className="server-icon">{server.id}</div>
            <strong>{server.name}</strong>
            <span>IRCd</span>
            <span className="server-status">S2S ONLINE</span>
          </div>
        ))}
      </div>

      <div className="network-legend">
        <span className="legend-line" />
        <span>IRIS-S2S SERVER CONNECTION</span>
      </div>

      <div className="protocol-flow">
        <span>HELLO</span>
        <span>AUTH</span>
        <span>SERVER</span>
        <span>READY</span>
        <span>CLIENT</span>
        <span>NICK</span>
        <span>JOIN</span>
        <span>MESSAGE</span>
        <span>PING</span>
        <span>PONG</span>
      </div>
    </div>
  );
}

export default ProtocolDiagram;
