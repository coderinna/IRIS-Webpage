function S2SRecovery() {
  return (
    <section id="s2s-recovery" className="documentation-section">

      <h2>Yhteyksien palautuminen ja uudelleensynkronointi</h2>

      <p>
        Palvelinten väliset verkkoyhteydet voivat katketa esimerkiksi
        verkkohäiriöiden, palvelimen uudelleenkäynnistyksen tai
        muiden teknisten ongelmien vuoksi. Hajautetun verkon
        toimintavarmuus edellyttää, että yhteyden palautuminen
        ja verkkotilan päivittäminen voidaan käsitellä hallitusti.
      </p>

      <h3 id="s2s-reconnection">Yhteyden uudelleenmuodostaminen</h3>

      <p>
        Yhteyden katkeamisen jälkeen palvelinten välinen yhteys
        voidaan muodostaa uudelleen. Uudelleenyhdistäminen
        mahdollistaa palvelinten välisen viestinnän jatkumisen
        yhteyskatkon jälkeen.
      </p>

      <h3 id="s2s-resynchronization">Verkkotilan uudelleensynkronointi</h3>

      <p>
        Yhteyskatkon aikana palvelinten tiedot voivat muuttua
        toisistaan poikkeaviksi. Yhteyden palautumisen jälkeen
        palvelinten täytyy tarvittaessa vaihtaa tietoja ja
        päivittää verkkotilansa vastaamaan jälleen verkon
        ajantasaista tilannetta.
      </p>

      <h3 id="s2s-network-partition">Verkon jakautuminen ja netsplit</h3>

      <p>
        Netsplit tarkoittaa tilannetta, jossa palvelinverkon
        yhteys katkeaa siten, että verkko jakautuu erillisiin
        osiin. Tällöin eri verkon osat eivät välttämättä näe
        toistensa käyttäjiä tai tapahtumia ennen yhteyden
        palautumista ja tilojen synkronointia.
      </p>

    </section>
  );
}

export default S2SRecovery;