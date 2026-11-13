function ServerReliability() {
  return (
    <section
      id="server-reliability"
      className="documentation-subsection"
    >
      <h2>Palvelimen toimintavarmuus</h2>

      <p>
        IRC-palvelimen toimintavarmuus perustuu yhteyksien
        hallintaan, liikenteen valvontaan, resurssien hallintaan
        sekä kykyyn käsitellä virhetilanteita hallitusti.
        Näiden mekanismien tarkoituksena on ylläpitää palvelimen
        vakautta myös poikkeavissa verkkotilanteissa.
      </p>

      <h3>Yhteyksien aikakatkaisut (Heartbeat ja Timeout)</h3>


      <p>
        S2S-yhteyksien toimivuutta valvotaan säännöllisesti
        heartbeat-viesteillä. Yhteyden osapuolet lähettävät
        toisilleen viestejä, joiden avulla voidaan varmistaa,
        että yhteys on edelleen aktiivinen ja toinen palvelin
        vastaa liikenteeseen.
      </p>
      <p>
        Yhteyksien aikakatkaisuilla havaitaan tilanteet, joissa
        yhteys ei enää vastaa odotetulla tavalla. IRIS-S2S käyttää
        Heartbeat-mekanismia yhteyden elossaolon valvontaan.
        Jos yhteys ei vastaa määräajassa, se voidaan käsitellä
        aikakatkaistuna yhteytenä.
      </p>


      <p>
        Jos odotettua vastausta ei saada määritellyn ajan
        kuluessa, yhteys voidaan tulkita katkenneeksi.
        Tällöin yhteyden tila päivitetään ja yhteyden
        katkeaminen voidaan käsitellä erillisenä
        verkkotapahtumana.
      </p>


      <h3>Liikenteen rajoittaminen (Rate Limiting)</h3>

      <p>
        Liikenteen rajoittamisella pyritään estämään liian suuren
        viestimäärän aiheuttama kuormitus. IRIS-S2S-yhteyksissä
        liikenteen määrää valvotaan yhteyskohtaisesti.
      </p>
      <p>
        IRIS-S2S-yhteyksissä vastaanotettavien kehysten määrää
        rajoitetaan yhteyskohtaisella liikenteen seurannalla.
        Vastaanotettujen kehysten määrää tarkastellaan aikaväleittäin,
        ja yhdelle yhteydelle on asetettu enimmäisrajaksi
        <strong> 1 000 kehystä 10 sekunnin aikana.</strong>
      </p>

      <p>
        Rajoituksen tarkoituksena on estää yksittäistä
        palvelinyhteyttä lähettämästä poikkeuksellisen suurta
        määrää viestejä lyhyessä ajassa. Näin vähennetään
        tarpeetonta kuormitusta ja suojataan palvelimen
        resursseja tilanteissa, joissa S2S-liikenne kasvaa
        huomattavasti tai yhteyttä käytetään väärin.
      </p>

<h3>Yhteyksien määrän rajoittaminen</h3>

<p>
  Yhteyksien määrän rajoittamisella hallitaan samanaikaisesti
  avoinna olevien client- ja S2S-yhteyksien määrää.
  Näin voidaan estää liian suuren yhteysmäärän aiheuttama
  kuormitus palvelimelle.
</p>

<h3>Viestijonojen rajoittaminen</h3>

<p>
  Viestijonojen rajoittamisella hallitaan yhteyksille
  lähetystä odottavien viestien määrää. Erityisesti hitaasti
  vastaanottavien yhteyksien kohdalla on tärkeää estää
  lähetysjonojen hallitsematon kasvu.
</p>

<h3>Muistissa säilytettävän tilan rajoittaminen</h3>

<p>
  IRIS rajoittaa S2S-yhteyksissä muistissa ylläpidettävien
  tietojen määrää. Esimerkiksi käsittelemättömien ACK-kuittausten
  ja vastaanotettujen viestitunnisteiden määrälle on asetettu
  ylärajat.
</p>

<table>
  <thead>
    <tr>
      <th>Resurssi</th>
      <th>Nykyinen raja</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Käsittelemättömät ACK-kuittaukset (`pendingAcks`)</td>
      <td>10 000</td>
    </tr>
    <tr>
      <td>Tallennetut viestitunnisteet (`messageIds`)</td>
      <td>100 000</td>
    </tr>
    <tr>
      <td>S2S-liikenne</td>
      <td>1 000 kehystä / 10 sekuntia</td>
    </tr>
  </tbody>
</table>


<h3>Virhetilanteista palautuminen</h3>

<p>
  Hajautetussa IRC-verkossa yksittäisen palvelimen tai
  palvelinten välisen yhteyden häiriö voi katkaista
  viestinnän verkon eri osien välillä (netsplit). Tällöin palvelimet
  eivät välttämättä saa kaikkia käyttäjä-, kanava- ja
  viestitapahtumia yhteyskatkon aikana.
</p>

<p>
  IRIS-S2S sisältää mekanismeja yhteyden katkeamisen
  havaitsemiseen ja yhteyden uudelleenmuodostamiseen.
  Heartbeat-mekanismilla seurataan yhteyden toimintaa,
  ja Timeout-mekanismi mahdollistaa vastaamattoman
  yhteyden tunnistamisen.
</p>

<h4>Yhteyden palauttaminen</h4>

<p>
  Kun S2S-yhteys katkeaa, yhteyden tila päivitetään ja
  katkenneen yhteyden hallintaan liittyvät tiedot käsitellään.
  Yhteyden palautuessa palvelimet muodostavat uuden S2S-yhteyden
  ja suorittavat palvelinten välisen kättelyn uudelleen.
</p>

<h4>Verkkotilan synkronointi</h4>

<p>
  Uudelleen muodostetun yhteyden jälkeen palvelimet
  synkronoivat verkkotilaa. Synkronointi sisältää esimerkiksi
  verkossa olevien käyttäjien ja kanavien tietoja.
  Näin yhteyden palautumisen jälkeen palvelimet voivat
  muodostaa uudelleen ajantasaisen näkymän verkon tilasta.
</p>

<h4>Verkkohäiriöt ja verkon jakautuminen</h4>

<p>
  Jos palvelinten välinen yhteys katkeaa pidemmäksi aikaa,
  verkko voi jakautua toisistaan erillisiin osiin.
  Tällaisessa tilanteessa verkon eri osissa voi tapahtua
  toisistaan riippumattomia käyttäjä- ja kanavatilan muutoksia.
  Yhteyden palautumisen jälkeen nämä tilat on synkronoitava
  uudelleen.
</p>

<p>
  Verkon jakautumiseen ja palautumiseen liittyvien
  ristiriitatilanteiden käsittely on tärkeä osa
  hajautetun IRC-verkon toimintavarmuutta.
</p>
    </section>
  );
}

export default ServerReliability;