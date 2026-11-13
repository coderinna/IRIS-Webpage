function S2SOverview() {
  return (
    <section id="s2s-overview" className="documentation-section">

      <h2>Hajautettu palvelinverkko</h2>
<p>
Hajautettu verkkotopologia tarkoittaa sitä, miten IRIS-verkon
 palvelimet ovat yhteydessä toisiinsa ja miten ne tuntevat toisensa.</p>
<p>
Yhteyden asetuksiin kuuluvat muun
 muassa :</p>
<table>
  <thead>
    <tr>
      <th>Tieto</th>
      <th>Kuvaus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serverId</code></td>
      <td>Palvelimen yksilöllinen tunniste IRIS-verkossa.</td>
    </tr>
    <tr>
      <td>Palvelimen nimi</td>
      <td>Palvelimen nimi, jolla se ilmoitetaan verkossa.</td>
    </tr>
    <tr>
      <td>Palvelimen versio</td>
      <td>Palvelinohjelmiston version ilmoittava tieto.</td>
    </tr>
    <tr>
      <td>Palvelimen rooli</td>
      <td>Palvelimelle määritelty rooli.</td>
    </tr>
    <tr>
      <td>Ominaisuudet</td>
      <td>Palvelimen ilmoittamat ominaisuudet ja tuetut toiminnot.</td>
    </tr>
    <tr>
      <td>AUTH-token</td>
      <td>Yhteinen salainen tunnistetieto, jota käytetään palvelimen tunnistamiseen.</td>
    </tr>
  </tbody>
</table>

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
<h4>Miksi verkkotopologia on hajautettu?</h4>

<p>
  Hajautetun rakenteen tarkoituksena on mahdollistaa useista
  itsenäisistä IRC-palvelimista muodostuva yhteinen verkko.
  Jokainen palvelin voi palvella omia käyttäjiään, mutta
  samalla käyttäjät ja kanavat voivat olla osa laajempaa
  palvelinten välistä verkkoa.
</p>

<p>
  Hajautus poistaa tarpeen keskittää kaikkia käyttäjiä,
  kanavia ja verkkoliikennettä yhden palvelimen varaan.
  Palvelimet voivat liittyä verkkoon eri yhteyksien kautta,
  ja verkkoliikenne voidaan välittää palvelimelta toiselle.
</p>

<p>
IRISissä tämä tarkoittaa käytännössä sitä, että S2S-protokolla huolehtii palvelinten välisestä viestinnästä, palvelinten esittelystä ja verkkotopologian synkronoinnista.
</p>

<h3 id="s2s-network-communication">Palvelinten välinen viestintä</h3>
      <p>
        IRIS-S2S (Server-to-Server) on IRIS-verkon oma palvelinten välinen
        tiedonsiirtoprotokolla. Sen avulla erilliset IRIS-palvelimet voivat
        muodostaa yhteyksiä toisiinsa ja välittää tietoa verkon palvelinten
        välillä.
      </p>
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