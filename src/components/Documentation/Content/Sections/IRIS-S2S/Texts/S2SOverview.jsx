function S2SOverview() {
  return (
    <section id="s2s-overview" className="documentation-section">

      <h2>Hajautettu palvelinverkko</h2>

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

<h3 id="s2s-network-communication">Palvelinten välinen viestintä</h3>

<p>
  IRIS-verkon palvelimet kommunikoivat keskenään IRIS-S2S-protokollan
  mukaisilla viesteillä. Viestien avulla palvelimet välittävät toisilleen
  tietoja verkkoon liittyvistä tapahtumista, kuten käyttäjien liittymisistä,
  poistumisista, nimimerkkimuutoksista ja kanavatoiminnoista.
</p>

<p>
  Kun tapahtuma käsitellään yhdellä palvelimella, tarvittavat tiedot
  välitetään edelleen muille verkkoon kytkeytyneille palvelimille.
  Näin palvelimet voivat ylläpitää yhteistä käsitystä verkon käyttäjistä
  ja kanavista sekä mahdollistaa viestinnän eri palvelimilla olevien
  käyttäjien välillä.
</p>

      <h4 id="s2s-message-processing">Viestien käsittely</h4>

      <p>
        Vastaanottava palvelin tunnistaa saapuvan viestin tyypin,
        käsittelee sen tai hylkää ja päivittää
        tarvittaessa paikallista verkkotilaa.
      </p>


    </section>
  );
}

export default S2SOverview;