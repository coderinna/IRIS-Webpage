function IRCSecurity() {
  return (
    <section
      id="irc-security"
      className="documentation-section"
    >
      <h2>Turvallinen IRC:n käyttö</h2>

      <p>
        IRC on verkkoviestintäympäristö, jossa käyttäjän tulee huomioida
        sekä verkkoyhteyteen että omaan toimintaansa liittyvät
        turvallisuus- ja yksityisyysnäkökohdat.
      </p>

      <h3>IP-osoitteet ja verkkoyhteys</h3>

      <p>
        IRC-palvelimelle muodostettu verkkoyhteys voi paljastaa käyttäjän
        IP-osoitteen palvelimen ylläpitäjälle ja palvelimen toteutuksesta
        riippuen myös muille verkon osapuolille. IP-osoitetta voidaan
        käyttää esimerkiksi yhteyden tekniseen tunnistamiseen,
        väärinkäytösten torjuntaan ja verkkoyhteyden hallintaan.
      </p>

      <p>
        Esimerkiksi EFnetin kaltaisissa IRC-verkoissa käyttäjän
        verkkotietojen näkyvyys riippuu verkon ja palvelimen
        toteutuksesta. IRC-yhteyttä ei siksi tule pitää automaattisesti
        anonyymina.
      </p>

      <p>
        Käyttäjän kannattaa tutustua käyttämänsä IRC-verkon käytäntöihin
        ja tarkistaa, millaisia tietoja muille käyttäjille ja palvelimen
        ylläpitäjille näkyy.
      </p>

      <h3>Invisible-tila</h3>

      <p>
        IRC:n <code>+i</code>-tila eli invisible-tila rajoittaa käyttäjän
        löytymistä tietyillä IRC:n käyttäjähauilla. Se ei kuitenkaan
        tarkoita, että käyttäjä olisi kokonaan näkymätön tai että hänen
        yhteytensä olisi anonyymi.
      </p>

      <p>
        Invisible-tila on hyödyllinen yksityisyysasetus, mutta sitä
        kannattaa ajatella yhtenä suojakerroksena muiden
        turvallisuuskäytäntöjen ohella.
      </p>

      <h3>Linkit ja tiedostot</h3>

      <p>
        IRC:ssä vastaanotettuihin linkkeihin tulee suhtautua
        varovaisesti. Tuntemattoman käyttäjän lähettämää linkkiä ei
        pidä avata vain siksi, että se näyttää kiinnostavalta tai
        luotettavalta.
      </p>

      <p>
        IRC:n kautta voidaan myös tarjota tiedostojen siirtoa esimerkiksi
        DCC-toiminnolla. Tuntemattomilta käyttäjiltä tulevia tiedostoja
        ei tule vastaanottaa tai avata.
      </p>

      <pre>
        /dcc close
      </pre>

      <p>
        Erityisesti suoritettaviin tiedostoihin ja muihin odottamattomiin
        tiedostoihin tulee suhtautua epäluottamuksellisesti.
      </p>

      <h3>Henkilötiedot</h3>

      <p>
        IRC:ssä kannattaa välttää tarpeettomien henkilötietojen
        jakamista. Julkisilla kanavilla ei tule julkaista esimerkiksi
        kotiosoitetta, puhelinnumeroa, henkilötunnusta, salasanoja tai
        muita yksityisiä tietoja.
      </p>

      <p>
        Myös muiden henkilöiden tietojen julkaisemista tulee välttää.
        Toisen henkilön tietoja ei tule jakaa IRC:ssä ilman asianmukaista
        perustetta ja tarvittaessa lupaa.
      </p>

      <h3>Botit</h3>

      <p>
        IRC-verkoissa voidaan käyttää botteja eli automatisoituja
        IRC-ohjelmia. Botit voivat esimerkiksi tarjota palveluita,
        valvoa kanavia, välittää tietoa tai suorittaa ylläpitotehtäviä.
      </p>

      <p>
        Kaikki botit eivät kuitenkaan ole automaattisesti luotettavia.
        Botin lähettämiin viesteihin ja sen tarjoamiin linkkeihin tulee
        suhtautua samalla varovaisuudella kuin muidenkin käyttäjien
        lähettämään sisältöön.
      </p>

      <h3>Salasanat ja tunnukset</h3>

      <p>
        IRC-tunnuksia ja salasanoja tulee käsitellä kuten muidenkin
        verkkopalveluiden tunnuksia. Salasanaa ei tule lähettää
        julkiselle kanavalle tai toiselle käyttäjälle.
      </p>

      <p>
        Sama salasana kannattaa välttää käyttämästä useissa eri
        palveluissa. Tunnistetietoja tulee syöttää vain palveluun,
        jonka aitoudesta ja yhteydestä käyttäjä voi varmistua.
      </p>

      <h3>Nimimerkit eivät todista henkilöllisyyttä</h3>

      <p>
        IRC-nimimerkki ei yksinään todista käyttäjän henkilöllisyyttä.
        Toinen käyttäjä voi esiintyä nimimerkillä tai nimellä, joka
        muistuttaa tunnettua henkilöä tai toista käyttäjää.
      </p>

      <p>
        Luottamuksellisia tietoja ei tule jakaa pelkästään nimimerkin
        tai keskustelun perusteella. Henkilöllisyys tulee tarvittaessa
        varmistaa muuta luotettavaa viestintäkanavaa käyttäen.
      </p>
    </section>
  );
}

export default IRCSecurity;