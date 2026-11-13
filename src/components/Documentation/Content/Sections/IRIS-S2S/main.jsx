import S2SOverview from './Texts/S2SOverview.jsx';
import S2SProtocol from './Texts/S2SProtocol.jsx';
import S2SNavbar from './Texts/S2SNavbar.jsx';

function S2S() {
  return (
    <section
      id="iris_s2s"
      className="documentation-section"
    >
      <span className="documentation-section-number">
        03
      </span>

      <h1>IRIS S2S</h1>

  <p>
Tässä osiossa kuvataan, miten IRIS-palvelimet muodostavat hajautetun verkon ja kommunikoivat keskenään.
  </p>

  <p>
IRIS-S2S-protokolla on toimii IRIS-verkon palvelinten välisen viestinnän perustana
 ja mahdollistaa itsenäisten palvelinten liittymisen osaksi yhteistä verkkoa.
     </p>
  
  <p>
     Protokolla vastaa mm. palvelinten välisestä viestinnästä,
    käyttäjien ja kanavien tietojen välittämisestä sekä verkon tilan
    synkronoinnista.
    </p>
 
 (kesken)

<S2SNavbar></S2SNavbar>
      <S2SOverview />
      <S2SProtocol />

    </section>
  );
}

export default S2S;