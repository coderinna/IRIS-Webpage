import IRCSafety from './Texts/IRCSafety.jsx';
import S2SSecurity from './Texts/S2SSecurity.jsx';
import NAVBAR from './Texts/Navbar.jsx';
import ServerReliability from './Texts/ServerReliability.jsx';
import DaemonSecurity from './Texts/DaemonSecurity.jsx';
import TransportSecurity from './Texts/Transport-Security.jsx';

function Security() {
  return (
    <section
      id="security"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        05
      </span>

      <h1>Tietoturva</h1>

      <p>
        Tässä osiossa käsitellään IRIS IRCd:n tietoturvaa,
        palvelinten välistä turvallista viestintää sekä IRC:n
        turvallista käyttöä.
      </p>

      <NAVBAR />
      <IRCSafety />

      <TransportSecurity></TransportSecurity>
      <S2SSecurity />
      < ServerReliability></ServerReliability>
      <DaemonSecurity></DaemonSecurity>

    </section>
  );
}

export default Security;