function S2SServerIdentity() {
  return (
    <section id="s2s-server-identity" className="documentation-section">

      <h2>Palvelinten tunnistaminen</h2>

      <p>
        Hajautetussa IRIS-verkossa palvelimet tarvitsevat yksilöllisen
        tunnisteen, jonka avulla ne voidaan erottaa toisistaan.
        Palvelintunniste toimii osana palvelinten välistä viestintää
        ja auttaa tunnistamaan, mistä palvelimesta tapahtuma on peräisin.
      </p>

      <h3 id="s2s-server-id">Palvelintunniste</h3>

      <p>
        Palvelintunniste yksilöi IRIS-palvelimen verkossa. Sen avulla
        voidaan yhdistää vastaanotettu tapahtuma oikeaan palvelimeen
        ja käsitellä palvelinten välisiä viestejä niiden alkuperän
        perusteella.
      </p>

      <h3 id="s2s-client-identity">Asiakkaiden tunnistaminen verkossa</h3>

      <p>
        Myös verkon käyttäjät tarvitsevat yksilöllisen tunnisteen.
        IRIS käyttää palvelintunnisteen ja asiakastunnisteen
        muodostamaa kokonaisuutta käyttäjän yksilöimiseen
        palvelinverkossa.
      </p>

      <h3 id="s2s-authentication">Palvelinten tunnistautuminen</h3>

      <p>
        Palvelinten välisessä viestinnässä on tärkeää varmistaa,
        että yhteyden muodostava palvelin kuuluu hyväksyttyyn verkkoon.
        Tunnistautuminen ja yhteyksien hyväksymiseen liittyvät
        tarkistukset ovat keskeinen osa verkon turvallisuutta.
      </p>

    </section>
  );
}

export default S2SServerIdentity;