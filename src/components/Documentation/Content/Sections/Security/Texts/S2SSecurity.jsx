function S2SSecurity() {
  return (
    <section
      id="s2s-security"
      className="documentation-subsection"
    >
      <h2>Palvelinten välinen tietoturva</h2>

      <p>
        IRIS-S2S-protokollan tietoturva perustuu seuraaviin
        teknisiin mekanismeihin:
      </p>

      <ol>
        <li>Palvelinten tunnistautuminen ja yhteyden hallinta</li>
        <li>Viestien validointi ja eheys</li>
        <li>Viestinvälityksen luotettavuus (ACK)</li>
        <li>Liikenteen hallinta (Rate Limiting)</li>
        <li>Yhteyksien valvonta ja toimintavarmuus</li>
      </ol>

<h3>Luottamus- ja valtuutusmalli</h3>

<p>
  Palvelinten tunnistamisen lisäksi hajautettu IRIS-verkko
  tarvitsee erillisen luottamus- ja valtuutuskerroksen.
 {/* Nykyisessä toteutuksessa palvelinten tunnistaminen on
  toteutettu, mutta palvelinkohtainen valtuutus on vielä
  kehityskohde.*/}
</p>

<p>Luottamus- ja valtuutusmallin kolme keskeistä periaatetta:</p>

<ol>
  <li>Authentication – Kuka palvelin on?</li>
  <li>Authorization – Saako palvelin liittyä verkkoon?</li>
  <li>Delegation – Saako palvelin esitellä uusia palvelimia?</li>
</ol>
 {/*
<p>

Nykyinen toteutus sisältää palvelimen tunnistamisen,
 yhteyden muodostamisen sekä verkkotopologian tekniset tarkistukset.


  Tavoitteena on kehittää nykyisen toteutuksen päälle
  palvelinkohtainen luottamusmalli, jossa verkon ylläpitäjä
  voi hyväksyä palvelimia, määritellä niiden oikeudet ja
  hallita sitä, miten verkon topologiaa voidaan laajentaa.
</p>*/}

<p>
  Näin IRIS-verkosta voidaan muodostaa hallittu ja
  ylläpitäjän määrittelemä kokonaisuus, jossa pelkkä
  yhteisen AUTH-salaisuuden tunteminen ei automaattisesti
  anna palvelimelle oikeutta liittyä verkkoon.
</p>
      <h3>Palvelinten tunnistaminen (Authentication)</h3>

      <p>
        IRIS-verkon jokaisella palvelimella on oma yksilöllinen
        palvelintunnisteensa (serverId). Tunnisteen avulla palvelin
        voidaan yksilöidä IRIS-verkossa ja erottaa muista verkon
        palvelimista.
      </p>

      <p>
        Palvelintunnistetta käytetään palvelinten välisessä
        viestinnässä sekä käyttäjien ja kanavien alkuperän
        yksilöimisessä. Sen avulla voidaan yhdistää verkossa
        välitettävät tiedot niiden alkuperäiseen palvelimeen.
      </p>
<h4>AUTH-TOKEN</h4>
      <p>
  Palvelimen tunnistaminen varmistetaan S2S-yhteyden
  muodostamisen yhteydessä AUTH-mekanismilla. Palvelin
  todentaa tunnistautumisensa yhteisellä salaisella
  AUTH-tokenilla, jonka kelpoisuus tarkistetaan yhteyden
  muodostamisen aikana. Tokenin vertailussa käytetään
  turvallista ajoituksesta riippumatonta vertailua
  (crypto.timingSafeEqual).
</p>

      <h3>Yhteyden muodostaminen ja kättely (Authorization)</h3>

      <p>
        IRIS-S2S-yhteyden muodostaminen perustuu erilliseen
        kättely- ja tunnistautumisprosessiin. Pelkkä TCP-yhteyden
        muodostaminen ei vielä oikeuta palvelinta liittymään
        IRIS-verkkoon tai vaihtamaan verkon tilatietoja.
      </p>

      <p>Kättely etenee neljän vaiheen kautta:</p>

      <ul>
        <li>
          <strong>HELLO: </strong> Kättely aloitetaan ja yhteyden
          muodostamiseen liittyvät perustiedot vaihdetaan.
        </li>
        <li>
          <strong>AUTH: </strong> Palvelimen tunnistetiedot
          tarkistetaan ennen yhteyden hyväksymistä.
        </li>
        <li>
          <strong>SERVER: </strong> Yhteyden muodostava palvelin
          ilmoittaa palvelinidentiteettinsä, joka tarkistetaan
          tunnistautumistietoihin nähden.
        </li>
        <li>
          <strong>READY: </strong> Kun kättelyn ja tunnistautumisen
          tarkistukset on hyväksytty, yhteys siirtyy valmiiseen
          tilaan. Tämän jälkeen voidaan aloittaa varsinainen
          S2S-viestintä ja verkon tilatietojen synkronointi.
        </li>
      </ul>

      <h3>Tunnistetietojen tarkistaminen</h3>

      <p>
        Palvelimen tunnistautuminen perustuu palvelinidentiteettiin
        sidottuihin tunnistetietoihin. Näin tunnistetietoja ei
        voida käyttää vapaasti esiintymiseen toisena
        IRIS-verkon palvelimena.
      </p>

      <p>
        Tunnistetietojen vertailussa käytetään constant-time-vertailua.
        Sen tarkoituksena on estää vertailuajan vaihtelua paljastamasta
        tietoa siitä, kuinka suuri osa tarkistettavista tunnistetiedoista
        vastaa odotettua arvoa.
      </p>

      <p>
        Tuntemattomat palvelimet, virheelliset tunnistetiedot sekä
        tilanteet, joissa tunnistetiedot eivät vastaa ilmoitettua
        palvelinidentiteettiä, hylätään tunnistautumisessa.
      </p>

      <h3>Yhteyden tilan validointi</h3>

      <p>
        IRIS-S2S-yhteyden muodostumista hallitaan vaiheittaisella
        tilakoneella. Yhteyden tila määrittää, mitä protokollaviestejä
        kyseisessä vaiheessa voidaan vastaanottaa ja käsitellä.
      </p>

      <p>
        Kättelyn aikana vastaanotettavan viestin tulee vastata
        yhteyden senhetkistä tilaa ja odotettua seuraavaa vaihetta.
        Varsinaista verkon tilan synkronointia tai reititysviestejä
        ei käsitellä ennen kuin yhteys on siirtynyt READY-tilaan.
      </p>

      <h3>Viestien validointi ja virheelliset viestit</h3>

      <p>
        Vastaanotetut S2S-kehykset tarkistetaan ennen niiden
        käsittelyä. Viestin rakenteen, sisältämien tietojen ja
        yhteyden tilan tulee vastata IRIS-S2S-protokollan
        määrittelyä.
      </p>

      <p>Viesti voidaan hylätä esimerkiksi seuraavissa tilanteissa:</p>

      <ul>
        <li>
          <strong>Virheellinen kehysrakenne:</strong> Vastaanotettu
          kehys ei vastaa protokollan odotettua rakennetta.
        </li>
        <li>
          <strong>Tuntematon viestityyppi:</strong> Kehyksen
          tyyppiä ei tunnisteta tai sille ei löydy vastaavaa
          käsittelijää.
        </li>
        <li>
          <strong>Virheellinen viestitunniste:</strong> Viestin
          yksilöivä tunniste ei ole kelvollinen.
        </li>
        <li>
          <strong>Duplikaattiviesti:</strong> Sama viestitunniste
          on jo vastaanotettu ja käsitelty kyseisessä yhteydessä.
        </li>
        <li>
          <strong>Virheellinen sekvenssinumero:</strong> Viestin
          järjestysnumero ei vastaa yhteyden odotettua tilaa.
        </li>
        <li>
          <strong>Virheelliset viestin tiedot:</strong> Viestin
          sisältämät kentät tai niiden arvot eivät läpäise
          viestikohtaista validointia.
        </li>
        <li>
          <strong>Virheellinen palvelin- tai käyttäjäidentiteetti:</strong>
          Viestissä ilmoitettu palvelin tai käyttäjä ei vastaa
          yhteyden kautta tunnettua identiteettiä.
        </li>
        <li>
          <strong>Virheellinen verkkotila:</strong> Viesti ei
          vastaa palvelimen nykyistä käyttäjä-, kanava- tai
          yhteystilaa.
        </li>
      </ul>

      <p>
        Tarkistusten tarkoituksena on estää virheellisen tai
        ristiriitaisen tiedon päätyminen IRIS-palvelimen sisäiseen
        tilaan ja edelleen välittyminen muille verkon palvelimille.
      </p>

      <h4>Esittelyviestin validointi</h4>

<p>
  Palvelimen esittelyn yhteydessä IRIS tarkistaa myös
  topologiatietojen kelpoisuuden. Ilmoitetun parent-palvelimen
  tulee vastata yhteyden toista päätä, ja hop count -arvon
  tulee olla positiivinen kokonaisluku.
</p>

      <h3>Viestien järjestys ja sekvenssinumerot</h3>

      <p>
        IRIS-S2S käyttää 64-bittisiä sekvenssinumeroita viestien
        järjestyksen seuraamiseen. Sekvenssinumerot ylläpidetään
        yhteyskohtaisesti, joten jokaisella S2S-yhteydellä on
        oma lähetys- ja vastaanottosekvenssinsä.
      </p>

      <p>
        Lähettävä palvelin kasvattaa lähetyssekvenssinumeroa
        jokaisen uuden sekvenssinumeron saavan viestin yhteydessä.
        Numero liitetään lähetettävään kehykseen, jolloin
        vastaanottava palvelin voi tarkastella viestin järjestystä
        kyseisellä yhteydellä.
      </p>

      <p>
        Vastaanottava palvelin ylläpitää omaa vastaanottosekvenssiään
        ja vertaa saapuvien viestien järjestysnumeroita yhteyden
        odotettuun tilaan. Näin voidaan havaita tilanteita, joissa
        viestien järjestys ei vastaa yhteyden sekvenssitietoja.
      </p>

      <p>
        Sekvenssinumeron enimmäisarvo on 2<sup>64</sup> − 1.
        Sekvenssinumeroiden käsittelyssä huomioidaan tämän
        64-bittisen arvon raja.
      </p>


      <h3>Viestien kuittaukset (ACK)</h3>

      <p>
        IRIS-S2S käyttää ACK-kuittausmekanismia palvelinten
        välisen viestinvälityksen seurantaan. Kun palvelin
        lähettää toiselle palvelimelle viestin, se tallentaa
        viestin tunnisteen odottavien kuittausten listaan.
      </p>

      <p>
        Vastaanottava palvelin käsittelee viestin ja lähettää
        onnistuneen käsittelyn jälkeen ACK-kuittauksen, joka
        sisältää alkuperäisen viestin yksilöllisen
        <code> messageId </code>-tunnisteen. Lähettävä palvelin
        käyttää tunnistetta yhdistääkseen kuittauksen oikeaan
        lähetettyyn viestiin ja poistaakseen sen odottavien
        kuittausten listasta.
      </p>

      <p>
        Jos kuittausta ei saada määritellyn aikarajan sisällä,
        viesti jää ilman vahvistettua kuittausta. IRIS seuraa
        tällaisia keskeneräisiä kuittauksia aikakatkaisumekanismin
        avulla.
      </p>


{/*

## 6. Nykytilan tarkistus
| Palvelinkohtainen luottamusrekisteri | Ei vielä toteutettu |
| Palvelinkohtainen liittymisoikeus | Ei vielä toteutettu |
| Palvelimen esittelyoikeuden tarkistus | Ei vielä toteutettu |
| Palvelinkohtaiset verkko-oikeudet | Ei vielä toteutettu |


/*}

      <h3>Luottamusketju ja palvelinten esittely</h3>
<p>Palvelinten välinen luottamuksen välittäminen, parent-palvelimen vastuu ja esiteltyjen palvelinten hyväksyminen.</p>
  {/**
   * 
**Delegation – saako palvelin esitellä uusia palvelimia?**
Mahdollisia myöhemmin määriteltäviä oikeuksia:

- `network.connect` – oikeus liittyä IRIS-verkkoon.
- `network.introduce` – oikeus esitellä uusia palvelimia.
- `network.route` – oikeus välittää verkkoliikennettä.
- `network.sync` – oikeus osallistua verkkotilan synkronointiin.
   * 
   * 
   */}
    </section>
  );
}

export default S2SSecurity;