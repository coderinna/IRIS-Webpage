function S2SProtocol() {
  return (
    <section id="s2s-protocol" className="documentation-section">

      <h2>IRIS-S2S-protokollan rakenne</h2>

      <p>
        IRIS-S2S on IRIS-projektia varten kehitetty oma
        palvelinten välinen protokolla. Se määrittelee, miten
        palvelimet muodostavat yhteyksiä, tunnistavat viestit
        ja vaihtavat tietoa keskenään.
      </p>

      <p>
        Protokolla on erillinen tavallisesta IRC-asiakasprotokollasta.
        IRC-asiakas kommunikoi palvelimen kanssa IRC-komentojen avulla,
        kun taas palvelinten välinen liikenne käyttää IRIS-S2S:n
        määrittelemää viestirakennetta.
      </p>

<h3 id="s2s-message-structure">Viestirakenne</h3>

<p>
  IRIS-S2S-protokolla käyttää binääristä kehysrakennetta (frame).
  Jokainen kehys koostuu 32 tavun otsakkeesta ja viestityypin
  mukaisesta payload-osasta.
</p>

<h4>Kehyksen rakenne</h4>

<table>
  <thead>
    <tr>
      <th>Kenttä</th>
      <th>Koko</th>
      <th>Kuvaus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Viestityyppi</td>
      <td>1 tavu</td>
      <td>Määrittää käsiteltävän viestityypin numeerisella opkoodilla.</td>
    </tr>
    <tr>
      <td>Viestitunniste</td>
      <td>16 tavua</td>
      <td>Yksilöi viestin ja mahdollistaa kaksoiskappaleiden tunnistamisen.</td>
    </tr>
    <tr>
      <td>Järjestysnumero</td>
      <td>8 tavua</td>
      <td>Yksilöi viestin järjestyksen kyseisellä yhteydellä.</td>
    </tr>
    <tr>
      <td>Payload</td>
      <td>Muuttuva</td>
      <td>Sisältää viestityyppikohtaiset tiedot binäärisessä muodossa.</td>
    </tr>
  </tbody>
</table>

<h4>Payloadin sisältö</h4>

<p>
  Payloadin rakenne määräytyy viestityypin mukaan. Sen kentät
  sisältävät tapahtuman käsittelyyn tarvittavat tiedot.
  Esimerkiksi:
</p>

<table>
  <thead>
    <tr>
      <th>Viestityyppi</th>
      <th>Payloadin sisältö</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CLIENT</td>
      <td>Käyttäjän tunniste, nimimerkki, käyttäjätunnus, palvelinnimi ja palvelintunniste.</td>
    </tr>
    <tr>
      <td>JOIN</td>
      <td>Kanavaan liittyvän käyttäjän ja kanavan tunnistetiedot.</td>
    </tr>
    <tr>
      <td>MESSAGE</td>
      <td>Viestin lähettäjän, kohteen ja viestisisällön tiedot.</td>
    </tr>
    <tr>
      <td>CHANNEL_STATE</td>
      <td>Kanavan nimi, aihe, tilatiedot, jäsenet ja kanavaan liittyvät palvelimet.</td>
    </tr>
    <tr>
      <td>ACK</td>
      <td>Vastaanotetun viestin tunnisteen kuittaus.</td>
    </tr>
  </tbody>
</table>

<p>
  Vastaanottava palvelin jäsentää kehyksen, tarkistaa sen
  rakenteen ja ohjaa payloadin viestityypin mukaiseen
  käsittelijään. Näin protokollan eri tapahtumat voidaan
  käsitellä yhtenäisen kehysrakenteen kautta.
</p>

      <h3 id="s2s-message-types">Viestityypit</h3>

<p>
  Protokollan viestityypit määrittelevät, millaista toimintoa
  palvelimelta toiselle välitetään. Viestityypit on jaettu
  yhteyden muodostamiseen, käyttäjien ja kanavien tapahtumiin
  sekä yhteyden hallintaan.
</p>

<h4>Yhteyden muodostaminen</h4>

<ul>
  <li><code>HELLO (0x01)</code> – yhteyden alustaminen</li>
  <li><code>AUTH (0x02)</code> – palvelimen tunnistautuminen</li>
  <li><code>SERVER (0x03)</code> – palvelimen tietojen välittäminen</li>
  <li><code>READY (0x04)</code> – yhteyden valmiustilan ilmoittaminen</li>
</ul>

<h4>Käyttäjät ja kanavat</h4>

<ul>
  <li><code>CLIENT (0x10)</code> – käyttäjän lisääminen verkkoon</li>
  <li><code>NICK (0x11)</code> – käyttäjän nimimerkin muuttaminen</li>
  <li><code>JOIN (0x12)</code> – käyttäjän liittyminen kanavalle</li>
  <li><code>PART (0x13)</code> – käyttäjän poistuminen kanavalta</li>
  <li><code>QUIT (0x14)</code> – käyttäjän poistuminen verkosta</li>
  <li><code>MESSAGE (0x15)</code> – viestin välittäminen</li>
  <li><code>NOTICE (0x16)</code> – ilmoitusviestin välittäminen</li>
  <li><code>TOPIC (0x17)</code> – kanavan aiheen välittäminen</li>
  <li><code>CHANNEL_STATE (0x18)</code> – kanavan tilatietojen välittäminen</li>
</ul>

<h4>Yhteyden hallinta</h4>

<ul>
  <li><code>PING (0x20)</code> – yhteyden toimivuuden tarkistaminen</li>
  <li><code>PONG (0x21)</code> – vastaus PING-viestiin</li>
  <li><code>ACK (0x22)</code> – viestin vastaanoton kuittaus</li>
</ul>

    </section>
  );
}

export default S2SProtocol;