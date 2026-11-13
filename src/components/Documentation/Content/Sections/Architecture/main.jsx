
import ArchitectureNavbar from './Texts/Navbar.jsx';

function Architecture() {
const components = [
  // Network Layer
  ['Network Layer', 'Asiakasyhteyksien vastaanotto, verkkoyhteydet, istunnot ja yhteyksien elinkaaren hallinta'],

  // IRC Protocol
  ['IRC Protocol Layer', 'IRC-protokollan jäsentäminen, validointi, komentojen reititys, käsittely ja vastausten muodostaminen'],
  ['Command Handler', 'IRC-komentojen, kuten NICK, USER, JOIN, PART, PRIVMSG ja MODE, käsittely'],

  // Core
  ['Core', 'Palvelimen keskeisen tilan hallinta: käyttäjät, nimimerkit, kanavat, jäsenyydet, käyttöoikeudet ja tilatiedot'],

  // Event Bus
  ['Event Bus', 'Järjestelmän sisäisten tapahtumien välittäminen eri komponenttien välillä'],

  // Services
  ['Services', 'IRC-palveluiden, kuten NickServ-, ChanServ- ja ylläpitotoimintojen toteutus'],

  // Observability
  ['Observability', 'Lokitus, mittarit, telemetria ja palvelimen toiminnan seuranta'],

  // IRIS S2S
  ['S2S Manager', 'Palvelinten välisten yhteyksien ja S2S-toimintojen koordinointi'],
  ['S2S Connection Management', 'Palvelinten välisten yhteyksien muodostaminen, ylläpito ja elinkaaren hallinta'],
  ['IRIS-S2S Protocol Layer', 'Palvelinten välisen protokollan viestirakenteet, koodaus, dekoodaus ja kehysten käsittely'],
  ['S2S Authentication & Handshake', 'Palvelinten tunnistaminen ja yhteyden muodostamiseen liittyvä kättely'],
  ['S2S Synchronization', 'Käyttäjä- ja kanavatietojen synkronointi palvelinten välillä'],
  ['S2S Routing', 'Käyttäjien ja kanavien viestien välittäminen IRIS-verkon palvelinten välillä']
];

  return (
    <section id="architecture" className="documentation-section">
      <span className="documentation-section-number">04</span>

      <h1>Järjestelmäarkkitehtuuri</h1>

      <p>
        Tässä osiossa esitellään IRIS IRCd:n tekninen arkkitehtuuri,
        ohjelmiston sisäinen rakenne sekä keskeiset järjestelmäkomponentit
        ja niiden väliset riippuvuudet.
      </p>

      <ArchitectureNavbar />

      <h2>Järjestelmän sisäinen rakenne</h2>

      <div className="architecture-component-list">
        {components.map(([name, description]) => (
          <div className="architecture-component" key={name}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Architecture;