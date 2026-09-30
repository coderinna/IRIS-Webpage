// src/components/Architecture/Architecture.jsx

import ArchitectureNode from './ArchitectureNode';
import './Architecture.css';

const clientTypes = [
  'HexChat',
  'irssi',
  'WeeChat',
  'Web IRC',
  'Bots',
  'Services'
];

const transports = [
  'Direct TCP',
  'TLS / SSL',
  'SSH Tunnel'
];

const ircCommands = [
  'NICK',
  'USER',
  'JOIN',
  'PART',
  'PRIVMSG',
  'NOTICE',
  'MODE',
  'QUIT'
];

const coreState = [
  'Users',
  'Nicknames',
  'Channels',
  'Permissions',
  'Sessions',
  'Membership',
  'Modes',
  'Server State'
];

const events = [
  'connection',
  'user.created',
  'nick.changed',
  'channel.joined',
  'message.sent',
  'user.quit',
  'channel.changed',
  'server.connected'
];

const services = [
  'NickServ',
  'ChanServ',
  'Oper/Admin',
  'Future'
];

const observability = [
  'Logging',
  'Metrics',
  'Telemetry',
  'Health'
];

const s2sFeatures = [
  'Link Manager',
  'S2S Connections',
  'IRIS Protocol',
  'Handshake',
  'Authentication',
  'Capability negotiation',
  'Sync / Routing'
];

const networkServers = [
  {
    name: 'IRIS SERVER A',
    type: 'NETWORK NODE',
    description: 'IRIS IRC Server',
    variant: 'server'
  },
  {
    name: 'IRIS SERVER B',
    type: 'NETWORK NODE',
    description: 'IRIS IRC Server',
    variant: 'server'
  },
  {
    name: 'IRIS SERVER C',
    type: 'NETWORK NODE',
    description: 'IRIS IRC Server',
    variant: 'server'
  }
];

const infrastructure = [
  {
    name: 'PostgreSQL',
    type: 'PERSISTENCE',
    description: 'Persistent State',
    variant: 'database'
  },
  {
    name: 'Redis',
    type: 'CACHE',
    description: 'Cache / Temporary State',
    variant: 'database'
  },
  {
    name: 'Metrics / Telemetry',
    type: 'OBSERVABILITY',
    description: 'Health / Performance',
    variant: 'database'
  }
];

function Architecture() {
  return (
    <section id="architecture" className="architecture">

      <div className="architecture__header">
        <span className="architecture__eyebrow">
          🌐 IRIS SYSTEM ARCHITECTURE
        </span>

        <h2 className="architecture__title">
          Inside <span>Legendary IRIS</span>
        </h2>

        <p className="architecture__description">
          From classic IRC clients to a distributed server-to-server
          network. Every layer has a defined responsibility.
        </p>
      </div>


      {/* CLIENTS */}

      <div className="architecture__clients">
        <div className="architecture__section-label">
          IRC CLIENTS
        </div>

        <div className="architecture__client-box">
          {clientTypes.map((client) => (
            <span
              key={client}
              className="architecture__client"
            >
              {client}
            </span>
          ))}
        </div>
      </div>


      {/* TRANSPORT */}

      <div className="architecture__connector">
        <span>↓</span>
      </div>

      <div className="architecture__transport">
        {transports.map((transport) => (
          <div
            key={transport}
            className="architecture__transport-item"
          >
            <span>{transport}</span>

            {transport === 'SSH Tunnel' && (
              <small>SSH → TCP forwarding</small>
            )}
          </div>
        ))}
      </div>


      <div className="architecture__connector">
        <span>↓</span>
      </div>


      {/* IRIS IRCd */}

      <div className="architecture__ircd">

        <div className="architecture__ircd-header">
          <span className="architecture__ircd-label">
            IRIS IRCd
          </span>

          <span className="architecture__ircd-protocol">
            Classic IRC Protocol
          </span>
        </div>


        {/* NETWORK LAYER */}

        <ArchitectureNode
          name="NETWORK LAYER"
          type="TRANSPORT"
          description="TCP Listener → Connections → Sessions → Connection Lifecycle"
          variant="network-layer"
        />


        <div className="architecture__internal-connector">
          ↓
        </div>


        {/* IRC PROTOCOL */}

        <div className="architecture__internal-section">
          <ArchitectureNode
            name="IRC PROTOCOL"
            type="PROTOCOL"
            description="Parser → Validation → Command Router → Command Handler → Serializer"
            variant="protocol"
          />

          <div className="architecture__commands">
            {ircCommands.map((command) => (
              <span key={command}>
                {command}
              </span>
            ))}

            <span>...</span>
          </div>
        </div>


        <div className="architecture__internal-connector">
          ↓
        </div>


        {/* CORE */}

        <div className="architecture__internal-section">
          <ArchitectureNode
            name="CORE"
            type="SERVER STATE"
            description="Core owns server state"
            variant="core"
          />

          <div className="architecture__state-grid">
            {coreState.map((state) => (
              <span key={state}>
                {state}
              </span>
            ))}
          </div>

          <div className="architecture__core-note">
            CORE OWNS SERVER STATE
          </div>
        </div>


        <div className="architecture__internal-connector">
          <span>Domain Events</span>
          <strong>↓</strong>
        </div>


        {/* EVENT BUS */}

        <div className="architecture__event-bus">

          <ArchitectureNode
            name="EVENT BUS"
            type="EVENT SYSTEM"
            description="Internal domain event distribution"
            variant="event"
          />

          <div className="architecture__events">
            {events.map((event) => (
              <span key={event}>
                {event}
              </span>
            ))}
          </div>

        </div>


        {/* EVENT DESTINATIONS */}

        <div className="architecture__event-connector">
          <span>↓</span>
        </div>

        <div className="architecture__destinations">

          {/* SERVICES */}

          <div className="architecture__destination">

            <div className="architecture__destination-title">
              SERVICES
            </div>

            {services.map((service) => (
              <span key={service}>
                {service}
              </span>
            ))}

          </div>


          {/* OBSERVABILITY */}

          <div className="architecture__destination">

            <div className="architecture__destination-title">
              OBSERVABILITY
            </div>

            {observability.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}

          </div>


          {/* S2S */}

          <div className="architecture__destination architecture__destination--s2s">

            <div className="architecture__destination-title">
              IRIS S2S
            </div>

            {s2sFeatures.map((feature) => (
              <span key={feature}>
                {feature}
              </span>
            ))}

          </div>

        </div>

      </div>


      {/* S2S NETWORK */}

      <div className="architecture__connector architecture__connector--large">
        <span>IRIS Protocol</span>
        <strong>↓</strong>
      </div>


      <div className="architecture__network">

        <div className="architecture__section-label">
          IRIS NETWORK
        </div>

        <p className="architecture__network-description">
          Distributed IRIS IRC servers connected through the
          IRIS server-to-server protocol.
        </p>


        <div className="architecture__network-servers">

          <div className="architecture__network-line architecture__network-line--top" />

          {networkServers.map((server) => (
            <ArchitectureNode
              key={server.name}
              {...server}
            />
          ))}

          <div className="architecture__network-line architecture__network-line--bottom" />

        </div>

      </div>


      {/* FUTURE INFRASTRUCTURE */}

      <div className="architecture__connector architecture__connector--large">
        <span>Future Infrastructure</span>
        <strong>↓</strong>
      </div>


      <div className="architecture__future">

        <div className="architecture__section-label">
          PERSISTENCE / INFRASTRUCTURE
        </div>

        <div className="architecture__future-label">
          Tulevaisuudessa (jos on motivaatiota ja kiinnostusta)
        </div>

        <div className="architecture__future-grid">

          {infrastructure.map((item) => (
            <ArchitectureNode
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Architecture;