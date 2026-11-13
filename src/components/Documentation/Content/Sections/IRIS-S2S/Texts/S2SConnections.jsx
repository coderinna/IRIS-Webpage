function S2SConnections() {
  return (
    <section id="s2s-connections" className="documentation-section">

      <h2>Palvelinten väliset yhteydet</h2>

      <p>
        IRIS-palvelimet kommunikoivat keskenään erillisten
        palvelinten välisten yhteyksien kautta. Näiden yhteyksien
        avulla palvelimet voivat vaihtaa tietoa ja ylläpitää
        yhteistä verkkotilaa.
      </p>

      <h3 id="s2s-connection-establishment">Yhteyden muodostaminen</h3>

      <p>
        Palvelinten välinen yhteys muodostetaan määriteltyjen
        yhteysasetusten perusteella. Yhteyden muodostamisen
        yhteydessä palvelimet vaihtavat tarvittavat tiedot
        keskinäistä viestintää varten.
      </p>

      <h3 id="s2s-connection-management">Yhteyksien hallinta</h3>

      <p>
        Palvelinten välisten yhteyksien hallinta vastaa yhteyksien
        tilan seurannasta ja viestinnän ylläpitämisestä.
        Yhteyden tila vaikuttaa siihen, miten palvelin voi
        välittää tietoa muille verkon palvelimille.
      </p>

      <h3 id="s2s-multiple-servers">Usean palvelimen verkko</h3>

      <p>
        IRIS-verkko voi koostua useista toisiinsa yhdistetyistä
        palvelimista. Palvelinten väliset yhteydet muodostavat
        verkon rakenteen, jonka kautta tieto kulkee eri palvelinten
        välillä.
      </p>

    </section>
  );
}

export default S2SConnections;