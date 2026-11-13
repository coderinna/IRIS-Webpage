function S2SRouting() {
  return (
    <section id="s2s-routing" className="documentation-section">

      <h2>Viestien välitys ja reititys</h2>

      <p>
        Hajautetussa IRC-verkossa viestien täytyy kulkea oikeiden
        palvelinten ja käyttäjien välillä. IRIS-S2S mahdollistaa
        tiedon välittämisen palvelinten välillä, jotta eri palvelimilla
        olevat käyttäjät voivat kommunikoida keskenään.
      </p>

      <h3 id="s2s-user-routing">Käyttäjien reititys</h3>

      <p>
        Käyttäjän yksilöllinen tunniste ja palvelintieto auttavat
        tunnistamaan, millä palvelimella käyttäjä sijaitsee.
        Näiden tietojen avulla palvelin voi selvittää, mihin
        suuntaan käyttäjälle tarkoitettu viesti tulee välittää.
      </p>

      <h3 id="s2s-private-message-routing">Yksityisviestien välitys</h3>

      <p>
        Eri palvelimilla olevien käyttäjien väliset yksityisviestit
        välitetään palvelinten välisen verkon kautta vastaanottajan
        palvelimelle.
      </p>

      <h3 id="s2s-channel-message-routing">Kanavaviestien välitys</h3>

      <p>
        Kanavaviestit voidaan välittää niille palvelimille,
        joilla kyseisen kanavan käyttäjiä on. Näin kanavaviestintä
        voi toimia usean palvelimen muodostamassa verkossa.
      </p>

    </section>
  );
}

export default S2SRouting;