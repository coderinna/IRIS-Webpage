function S2SOverview() {
  return (
    <section id="s2s-overview" className="documentation-section">

      <h2>Palvelinverkon yleiskuva</h2>

      <p>
        IRIS-S2S (Server-to-Server) on IRIS-verkon oma palvelinten välinen
        tiedonsiirtoprotokolla. Sen avulla erilliset IRIS-palvelimet voivat
        muodostaa yhteyksiä toisiinsa ja välittää tietoa verkon palvelinten
        välillä.
      </p>

      <p>
        IRIS-verkon arkkitehtuuri perustuu itsenäisiin IRC-palvelimiin,
        jotka muodostavat yhdessä hajautetun viestintäverkon. Jokainen
        palvelin vastaa omista paikallisista asiakkaistaan ja välittää
        tarvittavat tapahtumat muille verkkoon yhdistetyille palvelimille.
      </p>

      <p>
        Palvelinten välinen viestintä mahdollistaa käyttäjien ja kanavien
        toiminnan usean palvelimen muodostamassa verkossa ilman, että
        kaikkien asiakkaiden tarvitsee olla yhteydessä samaan palvelimeen.
      </p>

      <h3 id="s2s-network-model">Hajautettu palvelinmalli</h3>

      <p>
        IRIS käyttää hajautettua palvelinmallia, jossa verkko koostuu
        itsenäisistä palvelimista. Palvelimet ylläpitävät omia
        asiakasyhteyksiään ja osallistuvat yhteiseen verkkoon
        palvelinten välisten yhteyksien kautta.
      </p>

      <h3 id="s2s-network-communication">Palvelinten välinen viestintä</h3>

      <p>
        Palvelimet vaihtavat keskenään tietoa käyttäjistä, kanavista
        ja verkossa tapahtuvista muutoksista. Näin eri palvelimilla
        olevat käyttäjät voivat osallistua samaan verkkoympäristöön.
      </p>

    </section>
  );
}

export default S2SOverview;