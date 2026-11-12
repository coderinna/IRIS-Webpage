import "./CSS/ProtocolMessages.css";

function ProtocolMessages({ }) {


const messageGroups = [
  {
    category: "CONNECTION & HANDSHAKE",
    description: "Palvelinten välisten yhteyksien muodostaminen ja tunnistaminen",
    types: [
      ["HELLO", "0x01"],
      ["AUTH", "0x02"],
      ["SERVER", "0x03"],
      ["READY", "0x04"],
    ],
  },
  {
    category: "CLIENT & CHANNEL",
    description: "Asiakkaiden, kanavien ja niiden tilan hallinta",
    types: [
      ["CLIENT", "0x10"],
      ["NICK", "0x11"],
      ["JOIN", "0x12"],
      ["PART", "0x13"],
      ["QUIT", "0x14"],
      ["MESSAGE", "0x15"],
      ["NOTICE", "0x16"],
      ["TOPIC", "0x17"],
      ["CHANNEL_STATE", "0x18"],
    ],
  },
  {
    category: "CONNECTION CONTROL",
    description: "Yhteyden valvonta ja viestien kuittaus",
    types: [
      ["PING", "0x20"],
      ["PONG", "0x21"],
      ["ACK", "0x22"],
    ],
  },
];

  return (
    <section className="protocol_section-card">
      <div className="section-card ">
        <span className="section-number">02</span>

        <div>
          <span className="section-kicker">MESSAGES</span>
          <h2>Viestityypit</h2>
        </div>
      </div>

      <div className="message-groups">
        {messageGroups.map((group) => (
          <div className="message-group" key={group.category}>
            <div className="message-group-heading">
              <h3>{group.category}</h3>
              <p>{group.description}</p>
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
                  {group.types.map(([type, code]) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProtocolMessages;